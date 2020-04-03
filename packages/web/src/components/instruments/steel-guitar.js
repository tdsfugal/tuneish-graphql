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
      { name: Bn, tone: 11, oct: 2 },
      { name: Dn, tone: 2, oct: 3 },
      { name: En, tone: 4, oct: 3 },
      { name: Fs, tone: 6, oct: 3 },
      { name: Gs, tone: 8, oct: 3 },
      { name: Bn, tone: 11, oct: 3 },
      { name: En, tone: 4, oct: 4 },
      { name: Gs, tone: 8, oct: 4 },
      { name: Ds, tone: 3, oct: 4 },
      { name: Fs, tone: 6, oct: 4 },
    ],
  },
}

const PedalSteel = ({ nStrings, tuning, nFrets }) => {
  return <Fretboard tuning={TUNINGS[nStrings][tuning]} nFrets={nFrets} />
}

export default PedalSteel
