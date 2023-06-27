import styled from "styled-components";

import { getDimensionToken } from "src/design";

export const LinkBannerView = styled.div`
  width: calc(100vw-${getDimensionToken(["layout", "nav_width"])});
  height: 100%;
  position: relative;
  background-color: pink;
`;

export const LinkView = styled.label`
  flex: 1 1 auto;
  width: ${getDimensionToken(["layout", "nav_width"])};
  position: relative;
  background-color: lavender;
`;
