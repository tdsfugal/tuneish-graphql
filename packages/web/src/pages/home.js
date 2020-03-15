import React from "react"
import { Link } from "gatsby"
import { withAuthenticator } from "aws-amplify-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/bass">Bass</Link>
    <Link to="/trumpet">Trumpet</Link>
  </Layout>
)

export default HomePage
// export default withAuthenticator(HomePage)
