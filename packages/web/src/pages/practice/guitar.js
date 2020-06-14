import React, { useState } from "react"

// import { withAuthenticator } from "aws-amplify-react"

import { RowView, ColumnView, ItemView } from "../../components/_styles"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Circle from "../../components/circle"
import Chromatic from "../../components/chromatic"

import { Guitar } from "../../components/instruments"
// import { SheetMusic } from "../../components/sheet-music"
import { ChordConsole } from "../../components/chord-console"

import {
  AudioListener,
  RangeFocusControl,
  LeftHandedControl,
} from "../../components/footer-controls"

const r = 160

const GuitarPage = props => {
  const [nStrings] = useState(6)
  const [nFrets] = useState(20)

  const controls = [
    <AudioListener key="al" />,
    <RangeFocusControl key="hf" />,
    <LeftHandedControl key="lh" />,
  ]

  return (
    <Layout footerControls={controls} practice>
      <SEO key="se" title="Guitar" />
      <ColumnView>
        <ItemView flex="1 1 auto">
          <Chromatic />
        </ItemView>
        <RowView flex="2 1 auto">
          <ItemView flex="1 1 auto">
            <Circle key="ci" r={r} />
          </ItemView>
          <ItemView flex="5 5 auto">
            <ChordConsole />
          </ItemView>
        </RowView>
        <RowView flex="3 1 auto">
          <ItemView flex="1 1 auto">
            <Guitar key="ba" nStrings={nStrings} nFrets={nFrets} />
          </ItemView>
        </RowView>
      </ColumnView>
    </Layout>
  )
}

export default GuitarPage

// export default withAuthenticator(BassPage)
