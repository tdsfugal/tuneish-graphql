import styled from "styled-components";

import { getDimensionToken, getColorToken } from "src/design";

const DrawerBarView = styled.div`
  width: calc(100vw - ${getDimensionToken(["layout", "nav_width"])});
  left: ${getDimensionToken(["layout", "nav_width"])};
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  background-color: ${getColorToken(["core", "translucent"])};
`;

export const HeaderDrawerView = styled(DrawerBarView)`
  height: ${getDimensionToken(["layout", "header_height"])};
  top: 0px;
`;

export const FooterDrawerView = styled(DrawerBarView)`
  height: ${getDimensionToken(["layout", "footer_height"])};
  bottom: 0px;
`;
