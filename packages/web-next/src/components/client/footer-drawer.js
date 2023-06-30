"use client";

import { useReactiveVar } from "@apollo/client";

import { FOOTER_DRAWER_OPEN } from "src/state/reactive";
import { FooterDrawerView } from "src/styles/client";

const FooterDrawer = ({ children }) => {
  const footerDrawerOpen = useReactiveVar(FOOTER_DRAWER_OPEN);

  console.log("footer drawer open = ", footerDrawerOpen);

  return (
    <FooterDrawerView className="FooterDrawer">{children}</FooterDrawerView>
  );
};

export default FooterDrawer;
