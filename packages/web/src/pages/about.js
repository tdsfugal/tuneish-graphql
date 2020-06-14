import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ColumnView, ItemView, AboutPageBlurb } from "../components/_styles"

export const query = graphql`
  query AboutBlurbQuery {
    mdx(frontmatter: { name: { eq: "about" } }) {
      body
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout title="About">
    <SEO title="About" />
    <ColumnView>
      <ItemView flex="1 1 auto">
        <AboutPageBlurb>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </AboutPageBlurb>
      </ItemView>
    </ColumnView>
  </Layout>
)

export default AboutPage
