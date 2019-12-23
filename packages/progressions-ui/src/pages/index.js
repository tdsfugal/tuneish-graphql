import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"

const cx = 200
const cy = 200
const r = 160

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Circle cx={cx} cy={cy} r={r} />
  </Layout>
)

export default IndexPage
