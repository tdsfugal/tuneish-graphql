import styled from "styled-components";

import { getColorToken } from "src/design";

import { BackgroundView } from "./background-views";

export const NavView = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

export const NavBackgroundView = styled(BackgroundView)`
  background-color: ${getColorToken(["core", "secondary"])};
`;
