import React from "react";

import { PAGE_META_DATA } from "src/state/reactive";

import { LayoutView } from "src/styles";
import { getPageMeta } from "src/util";

import Main from "./main";

const Layout = ({ children, pagePath }) => {
  // set the global reactive var for page metadata then render the
  // components. They will pick up the metadata as/if it changes from the reactive var
  PAGE_META_DATA(getPageMeta(pagePath));

  return (
    <LayoutView>
      <Main> {children} </Main>
    </LayoutView>
  );
};

export default Layout;
