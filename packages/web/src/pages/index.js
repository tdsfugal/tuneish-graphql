import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Landing Page" />
    <Link to="/home">
      <h1>Stay Tuned!!</h1>
    </Link>
  </Layout>
)

export default IndexPage
