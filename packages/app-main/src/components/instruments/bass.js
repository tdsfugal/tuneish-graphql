import React from "react"

import Fretboard from "../fretboard/fretboard"

import {
  // Ab,
  // Bb,
  // Cb,
  // Db,
  // Eb,
  // Fb,
  // Gb,
  An,
  Bn,
  // Cn,
  Dn,
  En,
  // Fn,
  Gn,
  // As,
  // Bs,
  // Cs,
  // Ds,
  // Es,
  // Fs,
  // Gs,
} from "../../theory/note-names"

const TUNINGS = {
  4: [
    { name: En, tone: 4, octave: 1 },
    { name: An, tone: 9, octave: 1 },
    { name: Dn, tone: 2, octave: 2 },
    { name: Gn, tone: 7, octave: 2 },
  ],
  5: [
    { name: Bn, tone: 11, octave: 0 },
    { name: En, tone: 4, octave: 1 },
    { name: An, tone: 9, octave: 1 },
    { name: Dn, tone: 2, octave: 2 },
    { name: Gn, tone: 7, octave: 2 },
  ],
}

const Bass = ({ nStrings, nFrets, fretless, left }) => {
  return (
    <Fretboard
      tuning={TUNINGS[nStrings]}
      nFrets={nFrets}
      fretless={fretless}
      left={left}
    />
  )
}

export default Bass
