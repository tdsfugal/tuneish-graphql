import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"
import Tuner from "../components/tuner"

import GenericTunerView from "../components/tuner/generic-tuner-view"

import { BassFretboard } from "../components/instruments"

const r = 160

export default class BassPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nStrings: 4, nFrets: 20, fretless: true, left: false }
  }

  render() {
    const { nStrings, nFrets, fretless, left } = this.state
    return (
      <Layout>
        <SEO title="Home" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Circle r={r} />
          <BassFretboard
            nStrings={nStrings}
            nFrets={nFrets}
            fretless={fretless}
            left={left}
          />
          <Tuner TunerView={GenericTunerView} />
        </div>
      </Layout>
    )
  }
}
