import styled from "styled-components";

import { getDimensionToken, getColorToken } from "src/design";

export const HomeLinksView = styled.div`
  flex: 1 1 auto;
  width: ${getDimensionToken(["layout", "nav_width"])};
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

export const HomeLinksItemView = styled.div`
  flex: 0 0 ${getDimensionToken(["default", "button_height"])};
  width: ${getDimensionToken(["layout", "nav_width"])};
  position: relative;
  padding: 5px;
  color: ${getColorToken(["core", "white"])};
  background: "transparent";
`;
