import styled from "styled-components";

import { getDimensionToken } from "src/design";

const DrawerBarView = styled.div`
  width: calc(100vw - ${getDimensionToken(["layout", "nav_width"])});
  position: absolute;
  z-index: 100;
`;

export const HeaderDrawerView = styled(DrawerBarView)`
  height: ${getDimensionToken(["layout", "header_height"])};
  background-color: rgb(200, 200, 0, 0.3);
  top: true;
`;

export const FooterDrawerView = styled(DrawerBarView)`
  height: ${getDimensionToken(["layout", "footer_height"])};
  background-color: rgb(200, 0, 200, 0.3);
  bottom: true;
`;
