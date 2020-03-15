import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { HeaderView, HeaderTitleView } from "../_styles"
import { UserIcon } from "../user"

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
      <HomeLogo key="hl" />
      <HeaderTitleView key="htl">
        {title} in {}
        <Key />
      </HeaderTitleView>
      <UserIcon key="ui" />
    </HeaderView>
  )
}

export default Header
