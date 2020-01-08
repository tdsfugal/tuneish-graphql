import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"
import Tuner from "../components/tuner"

import TunerView from "../components/tuner/views/tuner-view"
import {
  // Ab,
  // Bb,
  // Cb,
  // Db,
  // Eb,
  // Fb,
  // Gb,
  An,
  // Bn,
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
} from "../theory/note-names"

import Fretboard from "../components/fretboard/fretboard"

const r = 160

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Circle r={r} />
      <Fretboard tuning={[En, An, Dn, Gn]} nFrets={21} />
      <Tuner TunerView={TunerView} />
    </div>
  </Layout>
)

export default IndexPage
