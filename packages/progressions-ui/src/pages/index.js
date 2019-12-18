import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Circle from "../components/circle"

const circleParam = {
  center: {
    x: 200,
    y: 200,
  },
  r: 160,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Circle param={circleParam} />
  </Layout>
)

export default IndexPage
