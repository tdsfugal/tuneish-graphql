import React from "react";

import { NavView, NavWrapper, HeaderButtonTextView } from "src/styles/server";

import NavBackground from "./nav-background";

import {
  HeaderControlWrapperView,
  FooterControlWrapperView,
} from "src/styles/server";

import {
  HeaderDrawerControl,
  FastLinks,
  FooterDrawerControl,
} from "src/components/client";

const Nav = () => {
  const headerOpenVisual = (
    <HeaderButtonTextView className="HeaderButtonTextView">
      OPEN
    </HeaderButtonTextView>
  );
  const headerCloseVisual = (
    <HeaderButtonTextView className="HeaderButtonTextView">
      CLOSE
    </HeaderButtonTextView>
  );

  return (
    <NavWrapper className="NavWrapper">
      <NavBackground />
      <NavView className="navView">
        <HeaderControlWrapperView>
          <HeaderDrawerControl
            openVisual={headerOpenVisual}
            closeVisual={headerCloseVisual}
          />
        </HeaderControlWrapperView>
        <FastLinks />
        <FooterControlWrapperView>
          <FooterDrawerControl />
        </FooterControlWrapperView>
      </NavView>
    </NavWrapper>
  );
};

export default Nav;
