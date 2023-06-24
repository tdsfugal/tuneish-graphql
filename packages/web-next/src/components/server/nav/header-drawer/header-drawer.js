import React from "react";

import {
  HeaderDrawerWrapperView,
  HeaderButtonTextView,
} from "src/styles/server";

import { getDimensionToken } from "src/design";

import { DrawerBar } from "src/components/client";

import { DrawerView } from "src/styles/client";

const HeaderDrawer = ({ children }) => {
  const openVisual = <HeaderButtonTextView>OPEN</HeaderButtonTextView>;
  const closeVisual = <HeaderButtonTextView>CLOSE</HeaderButtonTextView>;

  return (
    <HeaderDrawerWrapperView className="HeaderWrapperView">
      <DrawerBar
        openVisual={openVisual}
        closeVisual={closeVisual}
        height={getDimensionToken(["layout", "header_height"])}
        button_width={getDimensionToken(["layout", "nav_width"])}
      >
        {children}
      </DrawerBar>
    </HeaderDrawerWrapperView>
  );
};

export default HeaderDrawer;
