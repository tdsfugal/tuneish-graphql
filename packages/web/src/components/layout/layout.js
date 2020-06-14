import React from "react"
import Header from "./header"
import { LayoutView, MainView, MainScrollView, FooterView } from "../_styles"
import PracticeTitle from "./practice-title"

const Layout = ({ children, footerControls, title, restricted, practice }) => {
  let workingTitle = practice ? <PracticeTitle /> : title
  return (
    <LayoutView>
      <Header title={workingTitle} />
      <MainView>
        <MainScrollView>{children}</MainScrollView>
      </MainView>
      <FooterView>{footerControls}</FooterView>
    </LayoutView>
  )
}

export default Layout
