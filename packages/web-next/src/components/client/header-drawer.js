"use client";

import { useReactiveVar } from "@apollo/client";

import { HEADER_DRAWER_OPEN } from "src/state/reactive";
import { HeaderDrawerView } from "src/styles/client";

const HeaderDrawer = ({ children }) => {
  const drawerOpen = useReactiveVar(HEADER_DRAWER_OPEN);

  return (
    <HeaderDrawerView className="HeaderDrawer" $open={drawerOpen}>
      {children}
    </HeaderDrawerView>
  );
};

export default HeaderDrawer;
