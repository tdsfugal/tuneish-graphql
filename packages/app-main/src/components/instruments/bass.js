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

// Tunings go from top string on screen (high side of the FB) to bottom
const TUNINGS = {
  4: [
    { name: Gn, tone: 7, octave: 2 },
    { name: Dn, tone: 2, octave: 2 },
    { name: An, tone: 9, octave: 1 },
    { name: En, tone: 4, octave: 1 },
  ],
  5: [
    { name: Gn, tone: 7, octave: 2 },
    { name: Dn, tone: 2, octave: 2 },
    { name: An, tone: 9, octave: 1 },
    { name: En, tone: 4, octave: 1 },
    { name: Bn, tone: 11, octave: 0 },
  ],
}

const Bass = ({ nStrings, nFrets }) => {
  return <Fretboard tuning={TUNINGS[nStrings]} nFrets={nFrets} />
}

export default Bass
