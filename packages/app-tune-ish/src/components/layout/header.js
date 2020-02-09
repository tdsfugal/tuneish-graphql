import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { HeaderView, HeaderTitleView } from "../_styles"

import Key from "../key"

import HomeLogo from "./home-logo"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title || ""

  return (
    <HeaderView>
      <HomeLogo />
      <HeaderTitleView>
        {title} in {}
        <Key />
      </HeaderTitleView>
    </HeaderView>
  )
}

export default Header
