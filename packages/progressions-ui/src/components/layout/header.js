import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

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
    <header
      style={{
        background: `#aaa`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <HomeLogo />
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {title} in {}
            <Key />
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
