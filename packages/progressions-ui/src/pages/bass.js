import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"

import { Bass } from "../components/instruments"

import {
  FretlessControl,
  HandIndicatorControl,
} from "../components/footer-controls"

const r = 160

export default class BassPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nStrings: 4, nFrets: 20, fretless: true, left: false }
  }

  render() {
    const { nStrings, nFrets, fretless, left } = this.state
    const controls = [
      <FretlessControl key={"fl"} />,
      <HandIndicatorControl key={"hi"} />,
    ]

    return (
      <Layout footerControls={controls}>
        <SEO key="se" title="Home" />
        <Circle key="ci" r={r} />
        <Bass
          key="ba"
          nStrings={nStrings}
          nFrets={nFrets}
          fretless={fretless}
          left={left}
        />
      </Layout>
    )
  }
}

//  <Tuner TunerView={GenericTunerView} />
