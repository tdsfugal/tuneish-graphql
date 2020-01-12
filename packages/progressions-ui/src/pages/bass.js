import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"
import Tuner from "../components/tuner"

import TunerView from "../components/tuner/views/tuner-view"

import { BassFretboard } from "../components/instruments"

const r = 160

export default class BassPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nStrings: 5, nFrets: 21 }
  }

  render() {
    const { nStrings, nFrets } = this.state
    return (
      <Layout>
        <SEO title="Home" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Circle r={r} />
          <BassFretboard nStrings={nStrings} nFrets={nFrets} />
          <Tuner TunerView={TunerView} />
        </div>
      </Layout>
    )
  }
}
