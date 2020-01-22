import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import { LayoutView, MainView } from "../_styles"

const Layout = ({ children }) => {
  return (
    <LayoutView>
      <Header />
      <MainView>{children}</MainView>
      <Footer />
    </LayoutView>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
