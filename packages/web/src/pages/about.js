import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Remark } from "../components/content"
import { ColumnView, ItemView, AboutPageBlurb } from "../components/_styles"

export const query = graphql`
  query AboutBlurbQuery {
    allMarkdownRemark(filter: { frontmatter: { group: { eq: "about" } } }) {
      edges {
        node {
          internal {
            content
          }
          frontmatter {
            group
            name
            title
          }
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const about = edges.filter(x => x.node.frontmatter.name === "about")[0].node
    .internal.content

  return (
    <Layout title="About">
      <SEO title="About Page" />
      <ColumnView>
        <ItemView flex="1 1 auto">
          <AboutPageBlurb>
            <Remark content={about} />
          </AboutPageBlurb>
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default AboutPage
