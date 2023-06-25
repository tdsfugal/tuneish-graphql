import { NavView, NavWrapper } from "src/styles/server";

import NavBackground from "./nav-background";

import HeaderDrawerControl from "./header-drawer-control";
import FooterDrawerControl from "./footer-drawer-control";

const Nav = () => {
  return (
    <NavWrapper className="NavWrapper">
      <NavBackground />
      <NavView className="navView">
        <HeaderDrawerControl />
        <FastLinks />
        <FooterDrawerControl />
      </NavView>
    </NavWrapper>
  );
};

export default Nav;
