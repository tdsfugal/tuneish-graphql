import styled from "styled-components";

import { getDimensionToken, getColorToken } from "src/design";

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

export const NavLinksView = styled.div`
  flex: 1 1 auto;
  width: ${getDimensionToken(["layout", "nav_width"])};
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

export const NavLinksItemView = styled.div`
  flex: 0 0 ${getDimensionToken(["nav_links", "button_height"])};
  width: calc(
    ${getDimensionToken(["layout", "nav_width"])} - 2 *
      ${getDimensionToken(["nav_links", "margin"])}
  );
  margin: ${getDimensionToken(["nav_links", "margin"])};
  padding: ${getDimensionToken(["nav_links", "padding"])};
  position: relative;
  color: ${getColorToken(["core", "white"])};
  background: "transparent";
  border: yellow solid 0.5px;
`;
