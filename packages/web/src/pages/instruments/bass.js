import React, { useState } from "react"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { RowView, ColumnView, ItemView } from "../../components/_styles"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Circle from "../../components/circle"

import { Bass } from "../../components/instruments"
// import { SheetMusic } from "../components/sheet-music"
import { ChordConsole } from "../../components/chord-console"

import {
  AudioListener,
  FretlessControl,
  FiveStringControl,
  RangeFocusControl,
  LeftHandedControl,
} from "../../components/footer-controls"

import Key from "../../components/key"

const r = 160

const GET_FIVE_STRING = gql`
  query {
    fretboard @client {
      fiveString
    }
  }
`
const BassPage = props => {
  const { loading, error, data } = useQuery(GET_FIVE_STRING)
  const [nFrets] = useState(20)

  const nStrings =
    loading || error || !data || !data.fretboard || !data.fretboard.fiveString
      ? 4
      : 5

  const controls = [
    <AudioListener key="al" />,
    <FretlessControl key="fl" />,
    <FiveStringControl key="fv" />,
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
            <Bass key="ba" nStrings={nStrings} nFrets={nFrets} />
          </ItemView>
        </RowView>
      </ColumnView>
    </Layout>
  )
}

export default BassPage
