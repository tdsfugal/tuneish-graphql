import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { LayoutView, MainView, FooterView } from "../_styles"

const Layout = ({ children, footerControls, title }) => {
  return (
    <LayoutView>
      <Header title={title} />
      <MainView>{children}</MainView>
      <FooterView>{footerControls}</FooterView>
    </LayoutView>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
