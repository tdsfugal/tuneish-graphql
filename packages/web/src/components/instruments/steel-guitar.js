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
  // An,
  Bn,
  // Cn,
  Dn,
  En,
  // Fn,
  // Gn,
  // As,
  // Bs,
  // Cs,
  Ds,
  // Es,
  Fs,
  Gs,
} from "../../theory"

const TUNINGS = {
  10: {
    E9: [ 
      { name: Fs, pitch: 6, oct: 4 },
      { name: Ds, pitch: 3, oct: 4 },
      { name: Gs, pitch: 8, oct: 4 },
      { name: En, pitch: 4, oct: 4 },
      { name: Bn, pitch: 11, oct: 3 },
      { name: Gs, pitch: 8, oct: 3 },
      { name: Fs, pitch: 6, oct: 3 },
      { name: En, pitch: 4, oct: 3 },
      { name: Dn, pitch: 2, oct: 3 },
      { name: Bn, pitch: 11, oct: 2 }, 
    ],
  },
}

const PedalSteel = ({ nStrings, tuning, nFrets }) => {
  return <Fretboard tuning={TUNINGS[nStrings][tuning]} nFrets={nFrets} />
}

export default PedalSteel
