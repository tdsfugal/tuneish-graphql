import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import { ColumnView, ItemView, FrontPageBlurb } from "../components/_styles"
import SEO from "../components/seo"
import { StaticLogo } from "../components/logo"

export const query = graphql`
  query FrontPageBlurbQuery {
    mdx(frontmatter: { name: { eq: "welcome" } }) {
      body
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout title={"Welcome"}>
    <SEO title="Welcome" />
    <ColumnView>
      <ItemView flex="1 1 400px">
        <Link to="/practice/bass">
          <StaticLogo />
        </Link>
      </ItemView>
      <ItemView flex="1 1 200px">
        <FrontPageBlurb>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </FrontPageBlurb>
      </ItemView>
    </ColumnView>
  </Layout>
)

export default IndexPage
