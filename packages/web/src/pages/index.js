import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import {
  ColumnView,
  RowView,
  ItemView,
  FrontPageColumn,
  FrontPageBlurb,
} from "../components/_styles"
import SEO from "../components/seo"
import { StaticLogo } from "../components/logo"

export const query = graphql`
  query FrontPageBlurbQuery {
    allMarkdownRemark(
      filter: { frontmatter: { group: { eq: "front-page" } } }
    ) {
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

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const welcome = edges.filter(x => x.node.frontmatter.name === "welcome")[0]
    .node.internal.content

  return (
    <Layout title={"Tuneish.com"}>
      <SEO title="Landing Page" />
      <ColumnView>
        <ItemView flex="1 1 400px">
          <Link to="/practice">
            <StaticLogo />
          </Link>
        </ItemView>
        <ItemView flex="1 1 200px">
          <FrontPageBlurb>{welcome}</FrontPageBlurb>
        </ItemView>
        <RowView>
          <ItemView flex="1 1 200px">
            <Link to="/about">
              <FrontPageColumn>
                <p>ABOUT</p>
              </FrontPageColumn>
            </Link>
          </ItemView>
          <ItemView flex="1 1 200px">
            <Link to="/theory">
              <FrontPageColumn>
                <p>THEORY</p>
              </FrontPageColumn>
            </Link>
          </ItemView>
          <ItemView flex="1 1 200px">
            <Link to="/blog">
              <FrontPageColumn>
                <p>BLOG</p>
              </FrontPageColumn>
            </Link>
          </ItemView>
        </RowView>
      </ColumnView>
    </Layout>
  )
}

export default IndexPage
