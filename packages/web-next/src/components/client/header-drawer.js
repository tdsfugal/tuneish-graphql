"use client";

import { useReactiveVar } from "@apollo/client";

import { HEADER_DRAWER_OPEN } from "src/state/reactive";
import { HeaderDrawerView } from "src/styles/client";

const HeaderDrawer = ({ children }) => {
  const headerDrawerOpen = useReactiveVar(HEADER_DRAWER_OPEN);

  console.log("header drawer open = ", headerDrawerOpen);

  return (
    <HeaderDrawerView className="HeaderDrawer">{children}</HeaderDrawerView>
  );
};

export default HeaderDrawer;
