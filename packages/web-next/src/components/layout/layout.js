import React from "react";

import { GlobalStyles, LayoutView } from "/src/styles";

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <LayoutView>{children}</LayoutView>
  </>
);

export default Layout;
