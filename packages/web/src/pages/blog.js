import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  ColumnView,
  ItemView,
  // FormFrameView,
  // InputItemView,
  // InputLabelView,
  // ButtonView,
} from "../components/_styles"
import Welcome from "../components/welcome"

const BlogPage = props => {
  return (
    <Layout title="Blog" restricted="true">
      <SEO title="Blog Page" />
      <ColumnView>
        <ItemView flex="1 1 200px">
          <Welcome />
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default BlogPage
