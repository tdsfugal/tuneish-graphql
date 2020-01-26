import React from "react"

import { BassView } from "../_styles"

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

const Bass = ({ nStrings, nFrets, fretless, left }) => {
  return (
    <BassView>
      <Fretboard
        tuning={TUNINGS[nStrings]}
        nFrets={nFrets}
        fretless={fretless}
        left={left}
      />
    </BassView>
  )
}

export default Bass
