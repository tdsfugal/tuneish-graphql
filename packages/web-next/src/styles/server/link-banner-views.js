import styled from "styled-components";

import { getDimensionToken } from "src/design";

export const LinkBannerView = styled.div`
  width: calc(100vw-${getDimensionToken(["layout", "nav_width"])});
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

export const LinkView = styled.label`
  flex: 1 1 ${getDimensionToken(["default", "button_width"])};
  height: ${getDimensionToken(["default", "button_height"])};
  margin: 0px 10px 0px 10px;
  padding: 10px;
  background-color: plum;
`;
