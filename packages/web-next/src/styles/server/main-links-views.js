import styled from "styled-components";

import { getDimensionToken } from "src/design";

export const MainLinksView = styled.div`
  flex: 1 1 auto;
  width: ${getDimensionToken(["layout", "nav_width"])};
  position: relative;
  background-color: rgba(255, 0, 0, 0.2);
`;
