import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { LayoutView, MainView, FooterView } from "../_styles"

const Layout = ({ children, footerControls }) => {
  return (
    <LayoutView>
      <Header />
      <MainView>{children}</MainView>
      <FooterView>{footerControls}</FooterView>
    </LayoutView>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
