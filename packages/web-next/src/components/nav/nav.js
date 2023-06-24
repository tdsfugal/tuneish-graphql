import React from "react";

import { NavView, NavWrapper } from "src/styles/server";

import NavBackground from "./nav-background";
import HeaderDrawer from "./header-drawer";
import FastLinks from "./fast-links";
import FooterDrawer from "./footer-drawer";

const Nav = () => {
  return (
    <NavWrapper className="NavWrapper">
      <NavBackground />
      <NavView className="navView">
        <HeaderDrawer />
        <FastLinks />
        <FooterDrawer />
      </NavView>
    </NavWrapper>
  );
};

export default Nav;
