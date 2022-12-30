import styled from "@emotion/styled";

import { MAIN_BACKGROUND_COLOR, MAIN_FOREGROUND_COLOR } from "./palette";

export const MainView = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 80%;
  color: ${MAIN_FOREGROUND_COLOR};
  background: ${MAIN_BACKGROUND_COLOR};
`;

export const MainScrollView = styled.div`
  margin: auto;
  max-height: 100%;
  overflow-y: scroll;
`;
// Use these utility classes to lay out the interior of the main space.
