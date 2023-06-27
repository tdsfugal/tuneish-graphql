import styled from "styled-components";

import { getDimensionToken } from "src/design";

const DrawerBarView = styled.div`
  width: calc(100vw-${getDimensionToken(["layout", "nav_width"])});
  position: relative;
  z-index: 100;
`;

export const HeaderDrawerView = styled(DrawerBarView)`
  height: ${getDimensionToken(["layout", "header_height"])};
  background-color: yellow;
`;

export const FooterDrawerView = styled(DrawerBarView)`
  height: ${getDimensionToken(["layout", "footer_height"])};
  background-color: green;
`;
