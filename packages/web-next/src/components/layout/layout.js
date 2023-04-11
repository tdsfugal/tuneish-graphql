import React from "react";
import Main from "./main";

import { LayoutView } from "/src/styles";

const Layout = ({ children }) => {
  return (
    <LayoutView>
      <Main> {children} </Main>
    </LayoutView>
  );
};
export default Layout;
