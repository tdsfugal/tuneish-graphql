import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"

import { Bass } from "../components/instruments"

import AudioListener from "../components/audio"
import {
  FretlessControl,
  RangeFocusControl,
  LeftHandedControl,
} from "../components/footer-controls"

const r = 160

export default class BassPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nStrings: 4, nFrets: 20 }
  }

  render() {
    const { nStrings, nFrets } = this.state
    const controls = [
      <AudioListener key="al" />,
      <FretlessControl key="fl" />,
      <RangeFocusControl key="hf" />,
      <LeftHandedControl key="lh" />,
    ]

    return (
      <Layout footerControls={controls}>
        <SEO key="se" title="Home" />
        <Circle key="ci" r={r} />
        <Bass key="ba" nStrings={nStrings} nFrets={nFrets} />
      </Layout>
    )
  }
}

//  <Tuner TunerView={GenericTunerView} />
