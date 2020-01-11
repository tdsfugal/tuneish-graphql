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
  4: [En, An, Dn, Gn],
  5: [Bn, En, An, Dn, Gn],
}

const BassFretboard = ({ nStrings, nFrets }) => {
  return <Fretboard tuning={TUNINGS[nStrings]} nFrets={nFrets} />
}

export default BassFretboard
