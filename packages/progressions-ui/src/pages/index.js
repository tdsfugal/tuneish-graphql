import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tuner from "../components/tuner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/bass">Bass</Link>
    <Tuner />
  </Layout>
)

export default IndexPage
