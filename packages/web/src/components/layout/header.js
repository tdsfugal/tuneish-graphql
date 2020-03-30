import React from "react"
import { HeaderView, HeaderTitleView } from "../_styles"
import { UserIcon } from "../user"
import HomeLogo from "./home-logo"

const Header = ({ title = "" }) => {
  return (
    <HeaderView>
      <HomeLogo key="hl" />
      <HeaderTitleView key="htl">{title}</HeaderTitleView>
      <UserIcon key="ui" />
    </HeaderView>
  )
}

export default Header
