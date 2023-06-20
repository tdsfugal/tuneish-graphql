import React from "react";

import {
  NavView,
  NavWrapper,
  HeaderWrapperView,
  FastLinksWrapperView,
  FooterWrapperView,
} from "src/styles";

import NavBackground from "./nav-background";
import Header from "./header";
import FastLinks from "./fast-links";
import Footer from "./footer";

const Nav = () => {
  return (
    <NavWrapper className="NavWrapper">
      <NavBackground className="NavBackground" />
      <NavView className="navView">
        <Header />
        <FastLinks />
        <Footer />
      </NavView>
    </NavWrapper>
  );
};

export default Nav;
