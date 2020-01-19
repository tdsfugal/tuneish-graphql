import Tone from "tone"

import Notes from "../../theory/notes"

const NOTES = new Notes()

const MAX_FREQ = 4000 //Hz
const MIN_FREQ = 40 //Hz

const SAMPLE_RATE = 48000 // Hz

const MAX = SAMPLE_RATE / MIN_FREQ
const MIN = SAMPLE_RATE / MAX_FREQ

const SIZE = Math.pow(2, 12)
const SAMPLE_FREQ = SAMPLE_RATE / SIZE
const LOOP_TIME = 1000 / SAMPLE_FREQ
//
// console.log(`Minimum Size = ${2 * MAX}`)
// console.log(`Sample size = ${SIZE}`)
// console.log(`Sample frequency = ${SAMPLE_FREQ}`)
// console.log(`Loop time (ms) = ${LOOP_TIME}`)

const getCrosses = arr => {
  const ups = []
  const downs = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) downs.push(i)
    if (arr[i] < arr[i + 1]) ups.push(i)
  }
  return { ups, downs }
}

const autocorrelate = crosses => {
  const len = crosses.length
  const results = []
  for (let interval = MIN; interval < MAX; interval++) {
    let count = 0
    for (let i = 0; i < len - 1; i++) {
      const test = crosses[i] + interval
      let j = i
      while (j < len && crosses[j] <= test) {
        if (crosses[j] === test) count++
        j++
      }
    }
    if (count > 0) results.push([interval, count])
  }
  return results
}

const combine = (a, b) => {
  // Intelligently zip the arrays together
  let i = 0
  let j = 0
  const result = []
  while (i < a.length && j < b.length) {
    if (a[i][0] === b[j][0]) {
      // Combine the values and continue
      const combined = [a[i][0], a[i][1] + b[j][1]]
      result.push(combined)
      i++
      j++
    } else if (a[i][0] < b[j][0]) {
      // pull the value off of a and continue
      result.push(a[i])
      i++
    } else {
      /// pull the value off of b and continue
      result.push(b[j])
      j++
    }
  }

  if (i < a.length) {
    // then a may have more values
    return result.concat(a.slice(i))
  } else if (j < a.length) {
    return result.concat(b.slice(j))
  } else {
    return result
  }
}

const condense = arr => {
  // console.log(arr)
  // Try just getting the peak
  let peak = null
  let max = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > max) {
      max = arr[i][1]
      peak = arr[i][0]
    }
  }
  return SAMPLE_RATE / peak
}

// Debounce
let history = []
const debounce = note => {
  history.push(note) // Add the newest at the front
  if (history.length > 3) history.shift() // discard the oldest
  for (let i = 0; i < history.length - 1; i++) {
    if (history[i].oct !== note.oct || history[i].tone !== note.tone) {
      // There is no consensus.
      return null
    }
  }
  return note
}

export default class TunerWorker {
  // Do not cunstruct this class unless in a loaded component in a browser
  constructor(userMedia, fastCallback, stableCallback) {
    this.userMedia = userMedia
    this.fastCallback = fastCallback // Fast update of tuner views
    this.stableCallback = stableCallback // Deliberative update of app state

    // Only process signals above a -30 db threshold
    this.gate = new Tone.Gate(-30)
    this.userMedia.connect(this.gate)

    // Setup computation of the positive and negative zones
    this.gt0 = new Tone.GreaterThanZero()
    this.gate.connect(this.gt0)

    // Setup waveform output node
    this.waveform = new Tone.Waveform(SIZE)
    this.gt0.connect(this.waveform)

    // Start working
    setInterval(() => {
      // Get the array of positive (1) and negative (0) values
      const arr = this.waveform.getValue()
      // Find where 1->0 and 0->1.  Ignore constant regions.
      const { ups, downs } = getCrosses(arr)
      // Autocorrelate the crossing points
      const u = autocorrelate(ups)
      const d = autocorrelate(downs)
      // combine the up and down counts
      const combined = combine(u, d)
      if (combined.length > 0) {
        // Data was there; Condense the results
        const freq = condense(combined)
        if (freq > MIN && freq < MAX) {
          const nearest = NOTES.getNearestMidi(freq)
          if (nearest) {
            const note = NOTES.getNoteByMidi(nearest.midi)
            if (note && debounce(note)) {
              // // On major change, notify redux
              // const { tone, oct } = this.state
              // if (note.tone !== tone || note.oct !== oct) {
              //   stableCallback(note)
              // }
              // Update the tuner view
              fastCallback({
                freq,
                note,
                cent: nearest.cent,
              })
            }
          }
        }
      } else {
        // No data, inform the tuner that nothing is going on
        fastCallback({
          freq: -1,
          note: null,
          cent: 0,
        })
      }
    }, LOOP_TIME)
  }

  close() {
    console.log("closing")
  }
}
