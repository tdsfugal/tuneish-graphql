import React from "react";
import { Global, css } from "@emotion/react";

import { LayoutView } from "/src/styles";

const GLOBAL_STYLES = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .body {
    background-color: #ffffff;
  }
`;

const Layout = ({ children }) => (
  <>
    <Global styles={GLOBAL_STYLES} />
    <LayoutView>{children}</LayoutView>
  </>
);

export default Layout;
