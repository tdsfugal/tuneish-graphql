import { NavView, NavWrapper } from "src/styles/server";

import NavBackground from "./nav-background";

import HeaderControl from "./header-control";
import FastLinks from "./fast-links";
import FooterControl from "./footer-control";

const Nav = () => {
  return (
    <NavWrapper className="NavWrapper">
      <NavBackground />
      <NavView className="NavView">
        <HeaderControl />
        <FastLinks />
        <FooterControl />
      </NavView>
    </NavWrapper>
  );
};

export default Nav;
