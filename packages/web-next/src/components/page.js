import React from "react";

// import { PAGE_META_DATA } from "src/state/reactive";

import { LayoutView } from "src/styles";
// import { getPageMeta } from "src/util";

import Nav from "./nav";
import Main from "./main";

const Page = ({ pagePath }) => {
  // set the global reactive var for page metadata then render the
  // components. They will pick up the metadata as/if it changes from the reactive var
  // PAGE_META_DATA(getPageMeta(pagePath));

  return (
    <LayoutView>
      <Nav pagePath={pagePath} />
      <Main pagePath={pagePath} />
    </LayoutView>
  );
};

export default Page;
