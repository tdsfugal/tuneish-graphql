import INTERVALS from "./intervals"
import { DIMINISHED_SYMBOL, HALF_DIMINISHED_SYMBOL } from "./symbols"
import { MODES } from "./modes"
import { MAJ, MIN, AUG, DIM, HALF_DIM, SUS, DOM } from "./degrees"

const { P1, M2, m3, M3, P4, d5, P5, A5, M6, d7, m7, M7 } = INTERVALS

// Types
export const DYAD = "dyad"
export const TRIAD = "triad"
export const SIXTH = "6th"
export const SEVENTH = "7th"
export const NINETH = "9th"
export const ELEVENTH = "11th"
export const THIRTEENTH = "13th"

export const compatibleChords = ({ mode }) => {
  const modetones = MODES[mode]
  const m = modetones.length
  return CHORDS.filter(chord => {
    // make a copy so that CHORDS doesn't get messed up
    const chordtones = chord.semitones.slice(0)
    // See if all the chord tones are in the mode tone set
    let mIndex = 0
    for (let i = 0; i < chordtones.length; i++) {
      // find this chord tone in the modes
      const ctone = chordtones[i]
      // Bump the mode index up until it is pointing at an equal or greater tone
      while (modetones[mIndex] < ctone && mIndex < m) {
        mIndex += 1
        // Compare the tones. If there are no more mode tones to compare,
        // or the mode tone is higher than the chord tone then this is not
        // a valid chord for this mode. Return false to filter it out.
        if (mIndex === m || modetones[mIndex] > ctone) return false
      }
    }
    // All checks passed, transfer this chord to the results list.
    return true
  })
}

function semitones(intervalArray) {
  return intervalArray.map(interval => interval.semitones)
}

function intervals(intervalArray) {
  return intervalArray.map(interval => interval.name)
}

export const NULL_CHORD = {
  root: "",
  pitches: [],
  quality: "",
  type: "",
  intervals: [],
  semitones: [],
  suffix: "",
}

export const CHORDS = [
  // dyads

  // triads
  {
    quality: MAJ,
    type: TRIAD,
    intervals: intervals([P1, M3, P5]),
    semitones: semitones([P1, M3, P5]),
    suffix: "",
  },
  {
    quality: MIN,
    type: TRIAD,
    intervals: intervals([P1, m3, P5]),
    semitones: semitones([P1, m3, P5]),
    suffix: "m",
  },
  {
    quality: AUG,
    type: TRIAD,
    intervals: intervals([P1, M3, A5]),
    semitones: semitones([P1, M3, A5]),
    suffix: "+",
  },
  {
    quality: DIM,
    type: TRIAD,
    intervals: intervals([P1, m3, d5]),
    semitones: semitones([P1, m3, d5]),
    suffix: DIMINISHED_SYMBOL,
  },
  {
    quality: SUS,
    type: TRIAD,
    intervals: intervals([P1, M2, A5]),
    semitones: semitones([P1, M2, A5]),
    suffix: "sus2",
  },
  {
    quality: SUS,
    type: TRIAD,
    intervals: intervals([P1, P4, A5]),
    semitones: semitones([P1, P4, A5]),
    suffix: "sus4",
  },

  // 6ths

  {
    quality: MAJ,
    type: SIXTH,
    intervals: intervals([P1, M3, P5, M6]),
    semitones: semitones([P1, M3, P5, M6]),
    suffix: "6",
  },
  {
    quality: MIN,
    type: SIXTH,
    intervals: intervals([P1, m3, P5, M6]),
    semitones: semitones([P1, m3, P5, M6]),
    suffix: "m6",
  },

  // 7ths
  {
    quality: DOM,
    type: SEVENTH,
    intervals: intervals([P1, M3, P5, m7]),
    semitones: semitones([P1, M3, P5, m7]),
    suffix: "7",
  },
  {
    quality: MAJ,
    type: SEVENTH,
    intervals: intervals([P1, M3, P5, M7]),
    semitones: semitones([P1, M3, P5, M7]),
    suffix: "M7",
  },
  {
    quality: AUG,
    type: SEVENTH,
    intervals: intervals([P1, M3, A5, m7]),
    semitones: semitones([P1, M3, A5, m7]),
    suffix: "+7",
  },
  {
    quality: MIN,
    type: SEVENTH,
    intervals: intervals([P1, m3, P5, m7]),
    semitones: semitones([P1, m3, P5, m7]),
    suffix: "m7",
  },
  {
    quality: MIN,
    type: SEVENTH,
    intervals: intervals([P1, m3, P5, M7]),
    semitones: semitones([P1, m3, P5, M7]),
    suffix: "m(M7)",
  },
  {
    quality: DIM,
    type: SEVENTH,
    intervals: intervals([P1, m3, d5, d7]),
    semitones: semitones([P1, m3, d5, d7]),
    suffix: DIMINISHED_SYMBOL + "7",
  },
  {
    quality: HALF_DIM,
    type: SEVENTH,
    intervals: intervals([P1, m3, d5, m7]),
    semitones: semitones([P1, m3, d5, m7]),
    suffix: HALF_DIMINISHED_SYMBOL + "7",
  },
]
