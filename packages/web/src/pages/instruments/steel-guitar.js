import React, { useState } from "react"

// import { withAuthenticator } from "aws-amplify-react"

import { RowView, ColumnView, ItemView } from "../../components/_styles"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Circle from "../../components/circle"

import { SteelGuitar } from "../../components/instruments"
// import { SheetMusic } from "../../components/sheet-music"
import { ChordConsole } from "../../components/chord-console"

import {
  AudioListener,
  RangeFocusControl,
  LeftHandedControl,
} from "../../components/footer-controls"

import Key from "../../components/key"

const r = 160

const SteelGuitarPage = props => {
  const [nStrings] = useState(10)
  const [nFrets] = useState(25)
  const [tuning] = useState("E9")

  const controls = [
    <AudioListener key="al" />,
    <RangeFocusControl key="hf" />,
    <LeftHandedControl key="lh" />,
  ]

  return (
    <Layout footerControls={controls} title={[<Key key="key" />]}>
      <SEO key="se" title="Bass" />
      <ColumnView>
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
            <SteelGuitar
              key="ba"
              nStrings={nStrings}
              tuning={tuning}
              nFrets={nFrets}
            />
          </ItemView>
        </RowView>
      </ColumnView>
    </Layout>
  )
}

export default SteelGuitarPage

// export default withAuthenticator(BassPage)
