import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { ColumnView, ItemView } from "../components/_styles"
import SEO from "../components/seo"
import Logo from "../components/logo"
import Welcome from "../components/welcome"

const IndexPage = () => (
  <Layout title={"Tuneish.com"}>
    <SEO title="Landing Page" />
    <Link to="/home">
      <ColumnView>
        <ItemView flex="1 1 400px">
          <Logo />
        </ItemView>
        <ItemView flex="1 1 200px">
          <Welcome />
        </ItemView>
      </ColumnView>
    </Link>
  </Layout>
)

export default IndexPage
