import React, { useState } from "react"

// import { withAuthenticator } from "aws-amplify-react"

import { RowView, ColumnView, ItemView } from "../components/_styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"

import { Bass } from "../components/instruments"
import { SheetMusic } from "../components/sheet-music"

import AudioListener from "../components/audio"
import {
  FretlessControl,
  RangeFocusControl,
  LeftHandedControl,
} from "../components/footer-controls"

const r = 160

const BassPage = props => {
  const [nStrings] = useState(4)
  const [nFrets] = useState(20)

  const controls = [
    <AudioListener key="al" />,
    <FretlessControl key="fl" />,
    <RangeFocusControl key="hf" />,
    <LeftHandedControl key="lh" />,
  ]

  return (
    <Layout footerControls={controls}>
      <SEO key="se" title="Bass" />
      <ColumnView>
        <RowView flex="2 1 auto">
          <ItemView flex="1 1 auto">
            <Circle key="ci" r={r} />
          </ItemView>
          <ItemView flex="5 5 auto">
            <SheetMusic />
          </ItemView>
        </RowView>
        <RowView flex="3 1 auto">
          <ItemView flex="1 1 auto">
            <Bass key="ba" nStrings={nStrings} nFrets={nFrets} />
          </ItemView>
        </RowView>
      </ColumnView>
    </Layout>
  )
}

export default BassPage

// export default withAuthenticator(BassPage)
