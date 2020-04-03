import React from "react"
import { Link } from "gatsby"
// import { withAuthenticator } from "aws-amplify-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = () => (
  <Layout title={"Tuneish.com"}>
    <SEO title="Home" />
    <Link to="/bass">Bass</Link>
    <br />
    <Link to="/guitar">Guitar</Link>
    <br />
    <Link to="/steel-guitar">SteelGuitar</Link>
    <br />
    <Link to="/trumpet">Trumpet</Link>
    <br />
    <Link to="/flute">Flute</Link>
    <br />
    <Link to="/voice">Voice</Link>
  </Layout>
)

export default HomePage
// export default withAuthenticator(HomePage)
