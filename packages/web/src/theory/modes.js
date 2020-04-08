export const IONIAN = "ionian"
export const DORIAN = "dorian"
export const PHRYGIAN = "phrygian"
export const LYDIAN = "lydian"
export const MIXOLYDIAN = "mixolydian"
export const AEOLIAN = "aeolian"
export const LOCRIAN = "locrian"

function semitones(intervals) {
  return intervals.reduce(
    (acc, x) => {
      acc.array.push(acc.sum)
      acc.sum += x
      return acc
    },
    { sum: 0, array: [] }
  ).array
}

const W = 2
const H = 1

export const MODES = {
  [IONIAN]: semitones([W, W, H, W, W, W, H]),
  [DORIAN]: semitones([W, H, W, W, W, H, W]),
  [PHRYGIAN]: semitones([H, W, W, W, H, W, W]),
  [LYDIAN]: semitones([W, W, W, H, W, W, H]),
  [MIXOLYDIAN]: semitones([W, W, H, W, W, H, W]),
  [AEOLIAN]: semitones([W, H, W, W, H, W, W]),
  [LOCRIAN]: semitones([H, W, W, H, W, W, W]),
}
