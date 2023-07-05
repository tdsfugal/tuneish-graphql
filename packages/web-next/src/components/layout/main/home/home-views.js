import styled from "styled-components";

import { getColorToken } from "src/design";

import { BackgroundView } from "src/styles";

export const HomeScrollView = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: box;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: transparent;
  z-index: 0;
`;

export const HomeBackgroundView = styled(BackgroundView)`
  background-color: ${getColorToken(["core", "primary"])};
`;
