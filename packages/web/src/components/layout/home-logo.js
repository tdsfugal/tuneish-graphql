import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { LogoView } from "../_styles"

const HomeLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tuneish.logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Link to="/home">
      <LogoView>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </LogoView>
    </Link>
  )
}

export default HomeLogo
