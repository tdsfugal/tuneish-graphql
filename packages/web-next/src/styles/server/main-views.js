import styled from "styled-components";

import { getColorToken } from "src/design";

import { BackgroundView } from "./background-views";

export const MainView = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: box;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: transparent;
  z-index: 100;
`;

export const MainBackgroundView = styled(BackgroundView)`
  background-color: ${getColorToken(["core", "primary"])};
`;
