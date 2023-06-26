import styled from "styled-components";

import { getDimensionToken } from "src/design";

export const BlogLinksView = styled.div`
  flex: 1 1 auto;
  width: ${getDimensionToken(["layout", "nav_width"])};
  position: relative;
  background-color: rgba(0, 255, 0, 0.2);
`;
