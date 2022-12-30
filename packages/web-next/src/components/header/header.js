import React from "react";
import { HeaderView, HeaderTitleView } from "/src/styles";
import UserIcon from "./user-icon";
import HomeLogo from "./home-logo";

const Header = ({ title = "" }) => {
  return (
    <HeaderView>
      <HomeLogo key="hl" />
      <HeaderTitleView key="htl">{title}</HeaderTitleView>
      <UserIcon key="ui" />
    </HeaderView>
  );
};

export default Header;
