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
} from "../../theory"

// Tunings go from top string on screen (high side of the FB) to bottom
const TUNINGS = {
  6: [
    { name: En, pitch: 4, oct: 4 },
    { name: Bn, pitch: 11, oct: 3 },
    { name: Gn, pitch: 7, oct: 3 },
    { name: Dn, pitch: 2, oct: 3 },
    { name: An, pitch: 9, oct: 2 },
    { name: En, pitch: 4, oct: 2 },
  ],
}

const Guitar = ({ nStrings, nFrets }) => {
  return <Fretboard tuning={TUNINGS[nStrings]} nFrets={nFrets} />
}

export default Guitar
