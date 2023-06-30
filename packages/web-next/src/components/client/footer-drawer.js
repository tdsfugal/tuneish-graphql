"use client";

import { useReactiveVar } from "@apollo/client";

import { FOOTER_DRAWER_OPEN } from "src/state/reactive";
import { FooterDrawerView } from "src/styles/client";

const FooterDrawer = ({ children }) => {
  const drawerOpen = useReactiveVar(FOOTER_DRAWER_OPEN);

  return (
    <FooterDrawerView className="FooterDrawer" $open={drawerOpen}>
      {children}
    </FooterDrawerView>
  );
};

export default FooterDrawer;
