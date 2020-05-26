import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { LayoutView, MainView, MainScrollView, FooterView } from "../_styles"

const Layout = ({ children, footerControls, title, restricted }) => (
  <LayoutView>
    <Header title={title} />
    <MainView>
      <MainScrollView>{children}</MainScrollView>
    </MainView>
    <FooterView>{footerControls}</FooterView>
  </LayoutView>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
