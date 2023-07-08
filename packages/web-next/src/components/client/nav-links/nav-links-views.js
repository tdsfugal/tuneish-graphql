"use client";

import styled from "styled-components";
import { Reorder } from "framer-motion";

import { getDimensionToken, getColorToken } from "src/design";

export const NavLinksGroupView = styled(Reorder.Group)`
  height: 100%;
  width: ${getDimensionToken(["layout", "nav_width"])};
`;

export const NavLinksItemView = styled(Reorder.Item)`
  height: ${getDimensionToken(["nav_links", "button_height"])};
  width: calc(
    ${getDimensionToken(["layout", "nav_width"])} - 2 *
      ${getDimensionToken(["nav_links", "button_margin"])}
  );
  margin: ${getDimensionToken(["nav_links", "button_margin"])};
  background: transparent;
  box-sizing: border-box;
`;

export const NavLinksButtonView = styled.div`
  height: 100%;
  width: 100%;
  padding: ${getDimensionToken(["nav_links", "padding"])};
  background: ${getColorToken(["core", "secondary_light"])};
  color: ${getColorToken(["core", "white"])};
`;

export const NavLinksTextView = styled.label`
  color: ${getColorToken(["core", "white"])};
`;
