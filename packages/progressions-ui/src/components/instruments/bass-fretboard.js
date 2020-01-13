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
    { name: En, octave: 1 },
    { name: An, octave: 1 },
    { name: Dn, octave: 2 },
    { name: Gn, octave: 2 },
  ],
  5: [
    { name: Bn, octave: 0 },
    { name: En, octave: 1 },
    { name: An, octave: 1 },
    { name: Dn, octave: 2 },
    { name: Gn, octave: 2 },
  ],
}

const BassFretboard = ({ nStrings, nFrets }) => {
  return <Fretboard tuning={TUNINGS[nStrings]} nFrets={nFrets} left={false} />
}

export default BassFretboard
