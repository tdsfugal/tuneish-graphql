import React from "react"

// import { withAuthenticator } from "aws-amplify-react"

import { RowView, ColumnView, ItemView } from "../components/_styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"
import Key from "../components/key"

import { Voice } from "../components/instruments"
import { SheetMusic } from "../components/sheet-music"

import { AudioListener } from "../components/footer-controls"

const r = 160

const VoicePage = props => {
  const controls = [<AudioListener key="al" />]

  return (
    <Layout footerControls={controls} title={[<Key key="key" />]}>
      <SEO key="se" title="Trumpet" />
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
            <Voice key="ba" />
          </ItemView>
        </RowView>
      </ColumnView>
    </Layout>
  )
}

export default VoicePage
// export default withAuthenticator(TrumpetPage)
