import React from "react";

import {
  NavView,
  NavWrapper,
  HeaderButtonTextView,
  FooterButtonTextView,
} from "src/styles/server";

import NavBackground from "./nav-background";

import {
  HeaderDrawerControl,
  FastLinks,
  FooterDrawerControl,
} from "src/components/client";

const Nav = () => {
  const headerOpenVisual = (
    <HeaderButtonTextView className="HeaderButtonTextView">
      H-OPEN
    </HeaderButtonTextView>
  );
  const headerCloseVisual = (
    <HeaderButtonTextView className="HeaderButtonTextView">
      H-CLOSE
    </HeaderButtonTextView>
  );

  const footerOpenVisual = (
    <FooterButtonTextView className="FooterButtonTextView">
      F-OPEN
    </FooterButtonTextView>
  );
  const footerCloseVisual = (
    <FooterButtonTextView className="FooterButtonTextView">
      F-CLOSE
    </FooterButtonTextView>
  );

  return (
    <NavWrapper className="NavWrapper">
      <NavBackground />
      <NavView className="navView">
        <HeaderDrawerControl
          openVisual={headerOpenVisual}
          closeVisual={headerCloseVisual}
        />
        <FastLinks />
        <FooterDrawerControl
          openVisual={footerOpenVisual}
          closeVisual={footerCloseVisual}
        />
      </NavView>
    </NavWrapper>
  );
};

export default Nav;
