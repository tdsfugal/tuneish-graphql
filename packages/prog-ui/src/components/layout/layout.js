import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { LayoutView, MainView, FooterView } from "../_styles"

import AudioListener from "../audio"

const Layout = ({ children, footerControls }) => {
  return (
    <LayoutView>
      <Header />
      <MainView>{children}</MainView>
      <FooterView>
        <AudioListener />
        {footerControls}
      </FooterView>
    </LayoutView>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
