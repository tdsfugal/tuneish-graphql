"use client";

import { HeaderDrawerView } from "src/styles/client";

const HeaderDrawer = ({ children }) => {
  return (
    <HeaderDrawerView className="HeaderDrawer">{children}</HeaderDrawerView>
  );
};

export default HeaderDrawer;
