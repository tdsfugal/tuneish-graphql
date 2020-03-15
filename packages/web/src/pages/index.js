import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { ColumnView, ItemView } from "../components/_styles"
import SEO from "../components/seo"
import Logo from "../components/logo"
import Welcome from "../components/welcome"

const IndexPage = () => (
  <Layout>
    <SEO title="Landing Page" /> 
    <ItemView flex="1 1 100px" />
    <ColumnView>
      <ItemView flex="1 1 500px">
        <Logo />
      </ItemView>
      <ItemView flex="1 1 400px">
        <Link to="/subscribe">
          <Welcome />
        </Link>
      </ItemView>
      <ItemView flex="1 1 100px" />
    </ColumnView> 
  </Layout>
)

export default IndexPage
