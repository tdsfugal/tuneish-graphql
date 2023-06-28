"use client";

import { FooterDrawerView } from "src/styles/client";

const FooterDrawer = ({ children }) => {
  return (
    <FooterDrawerView className="FooterDrawer">{children}</FooterDrawerView>
  );
};

export default FooterDrawer;
