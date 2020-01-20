import Tone from "tone"

import Notes from "../../theory/notes"

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

export default class FrequencyDetector {
  // Do not cunstruct this class unless in a loaded component in a browser
  constructor(fastCallback, stableCallback) {
    this.fastCallback = fastCallback // Fast update of tuner views
    this.stableCallback = stableCallback // Deliberative update of app state
    this.tone = ""
    this.oct = 0
    this.freq = 0
  }

  start(callback) {
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

    // Start the user media service. This asks the user if they are willing to be monitored.
    um.open(this.fastUpdate, this.stableUpdate)
      // If here, then the user has accepted.  Start the services.
      .then(userMedia => {
        this.userMedia = userMedia
        // Only process signals above a -30 db threshold
        this.gate = new Tone.Gate(-30)
        this.userMedia.connect(this.gate)

        // Setup computation of the positive and negative zones
        this.gt0 = new Tone.GreaterThanZero()
        this.gate.connect(this.gt0)

        // Setup waveform output node
        this.waveform = new Tone.Waveform(SIZE)
        this.gt0.connect(this.waveform)

        // setup and start the sensing event loup
        this.intervalTimer = setInterval(() => {
          // Get the array of positive (1) and negative (0) values
          const arr = this.waveform.getValue()
          // Find where 1->0 and 0->1.  Ignore constant regions.
          const { ups, downs } = getCrosses(arr)
          // Autocorrelate the crossing points
          const u = autocorrelate(MAX, MIN, ups)
          const d = autocorrelate(MAX, MIN, downs)
          // combine the up and down counts
          const combined = combine(u, d)
          if (combined.length > 0) {
            // Data was there; Condense the results
            const freq = condense(SAMPLE_RATE, combined)
            if (freq > MIN && freq < MAX) {
              const nearest = NOTES.getNearestMidi(freq)
              if (nearest) {
                const note = NOTES.getNoteByMidi(nearest.midi)
                if (note && debounce(note)) {
                  // call the stable callback when the note has definately changed
                  if (note.tone !== this.tone || note.oct !== this.oct) {
                    this.stableCallback(note)
                  }
                  // call the fast callback on every change
                  this.fastCallback({
                    freq,
                    note,
                    cent: nearest.cent,
                  })
                }
              }
            }
          } else {
            // No data, inform the tuner that nothing is going on
            this.fastCallback({
              freq: -1,
              note: null,
              cent: 0,
            })
          }
        }, LOOP_TIME)

        // Notify the React component of the change
        callback(this.userMedia.status)
      })
      .catch(e => console.log(e))
  }

  stop(callback) {
    console.log("closing")
    clearInterval(this.intervalTimer)
    this.userMedia.close()
    this.waveform.dispose()
    this.gt0.dispose()
    this.gate.dispose()
    this.userMedia.dispose()
    callback("stopped")
  }
}
