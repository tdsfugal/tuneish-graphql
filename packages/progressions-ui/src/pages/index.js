import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"
import Tuner from "../components/tuner"

import TunerView from "../components/tuner/views/tuner-view"

const r = 160

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Circle r={r} />
      <Tuner TunerView={TunerView} />
    </div>
  </Layout>
)

export default IndexPage
