import styled from "styled-components";

import { getDimensionToken } from "src/design";

export const FastLinksView = styled.div`
  flex: 1 1 auto;
  width: ${getDimensionToken(["layout", "nav_width"])};
  background-color: transparent;
  border: 1px solid red;
  position: relative;
  z-index: 0;
`;
