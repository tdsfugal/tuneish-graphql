import Tone from "tone"
import { periodic, map, filter, now, multicast } from "@most/core"

import { Notes, NULL_NOTE } from "../../theory"

import {
  getCrosses,
  autocorrelate,
  combine,
  condense,
  debounce,
} from "./fd-utilities"

const NOTES = new Notes()

const MAX_FREQ = 4000 //Hz
const MIN_FREQ = 40 //Hz

const SAMPLE_RATE = 48000 // Hz

const MAX = SAMPLE_RATE / MIN_FREQ
const MIN = SAMPLE_RATE / MAX_FREQ

const SIZE = Math.pow(2, 12)
const SAMPLE_FREQ = SAMPLE_RATE / SIZE
const LOOP_TIME = 1000 / SAMPLE_FREQ

// console.log(`Minimum Size = ${2 * MAX}`)
// console.log(`Sample size = ${SIZE}`)
// console.log(`Sample frequency = ${SAMPLE_FREQ}`)
// console.log(`Loop time (ms) = ${LOOP_TIME}`)

export default class Tuner {
  // Do not cunstruct this class unless in a loaded component in a browser
  constructor() {
    this.audioStream = multicast(now(NULL_NOTE))
  }

  async start(callback) {
    // This method should only be called from within a mounted React component,
    // otherwise Tone cannot successfully request a usermedia object.
    const um = new Tone.UserMedia()

    // console.log(`Volume = ${um.volume.value}`)
    // console.log(`Units = ${um.volume.units}`)
    // console.log(`DeviceId = ${um.deviceId}`)
    // console.log(`GroupId = ${um.deviceId}`)
    // console.log(`Label = ${um.label}`)
    // console.log(`State = ${um.state}`)
    // console.log(`ChannelCountMode = ${um.channelCountMode}`)
    // console.log(`ChannelInterpretation = ${um.channelInterpretation}`)
    // console.log(`ChannelCount = ${um.channelCount}`)
    // console.log(`NumberOfInputs = ${um.numberOfInputs}`)
    // console.log(`NumberOfOutputs = ${um.numberOfOutputs}`)
    // console.log(`Mute = ${um.mute}`)

    // The audioEventStream is a periodic source for raw audio events.
    // It is constructed with pure ToneJS code and has nothing to do with
    // MostJS other than the map function that turns periodic undefined
    // events into audio samples.
    const audioEventStream = await um
      // Attempt to open the UserMedia. If the user does not agree this promise does not resolve.
      .open()
      // Set up the audio processing chain
      .then(userMedia => {
        // Create the process steps
        const gate = new Tone.Gate(-30)
        const gt0 = new Tone.GreaterThanZero()
        const waveform = new Tone.Waveform(SIZE)
        // Assemble the process
        userMedia.connect(gate)
        gate.connect(gt0)
        gt0.connect(waveform)

        // hang on to the UserMedia so it can be shut down
        this.userMedia = userMedia

        // Export the audio process interface
        return waveform
      })
      // Use the audio process external interface to create a periodic stream
      // of raw audio events. These waveforms are processed later.
      .then(waveform => map(() => waveform.getValue(), periodic(LOOP_TIME)))
      .catch(e => console.log(e))

    // The processingStream is a pure MostJS construct. It transforms raw audio
    // samples into filtered symbolic information.
    const processingStream = filter(
      x => x !== null,
      map(waveformArray => {
        // Find where 1->0 and 0->1.  Ignore constant regions.
        const { ups, downs } = getCrosses(waveformArray)
        // Autocorrelate the crossing points
        const u = autocorrelate(MAX, MIN, ups)
        const d = autocorrelate(MAX, MIN, downs)
        // combine the up and down counts
        const combined = combine(u, d)
        if (combined.length === 0) return NULL_NOTE
        // Condense the data
        const freq = condense(SAMPLE_RATE, combined)
        if (freq < MIN || freq > MAX) return NULL_NOTE
        // Identify note. IF it cannot be found assume tuner has nothing
        const playingNoteWithCent = NOTES.getNearestNoteWithCent(freq)
        if (!playingNoteWithCent) return NULL_NOTE
        // ignore noisy results
        if (!debounce(playingNoteWithCent)) return null
        // Passed all teh checks, start a new event in the stream
        return playingNoteWithCent
      }, audioEventStream)
    )

    // The processed and filtered data is served by the persistent
    // audioStream property.
    this.audioStream = multicast(processingStream)

    callback(this.audioStream)
  }

  stop(callback) {
    if (this.userMedia) this.userMedia.close()
    this.audioStream = multicast(now(NULL_NOTE))
    if (callback) callback("stopped")
  }
}
