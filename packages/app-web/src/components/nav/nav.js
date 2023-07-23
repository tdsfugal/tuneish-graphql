"use client";

import { NavWrapper } from "src/styles";
import { NavView, NavBackgroundView } from "./nav-views";

import HeaderControl from "./header-control";
import FooterControl from "./footer-control";

const Nav = ({ midSection }) => {
  return (
    <NavWrapper className="NavWrapper">
      <NavBackgroundView className="NavBackground" />
      <NavView className="Nav">
        <HeaderControl />
        {midSection}
        <FooterControl />
      </NavView>
    </NavWrapper>
  );
};

export default Nav;
