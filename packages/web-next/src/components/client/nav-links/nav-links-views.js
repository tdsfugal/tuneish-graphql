import styled from "styled-components";
import { motion } from "framer-motion";

import { getDimensionToken, getColorToken } from "src/design";

export const NavLinksView = styled.div`
  flex: 1 1 auto;
  width: ${getDimensionToken(["layout", "nav_width"])};
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

export const NavLinksItemView = styled(motion.div)`
  flex: 0 0 ${getDimensionToken(["nav_links", "button_height"])};
  width: calc(
    ${getDimensionToken(["layout", "nav_width"])} - 2 *
      ${getDimensionToken(["nav_links", "button_margin"])}
  );
  margin: ${getDimensionToken(["nav_links", "button_margin"])};
  padding: ${getDimensionToken(["nav_links", "padding"])};
  position: relative;
  background: ${getColorToken(["core", "secondary_light"])};
  box-sizing: border-box;
`;

export const NavLinksTextView = styled.label`
  height: 100%
  width: 100% 
  padding: ${getDimensionToken(["nav_links", "padding"])};
  color: ${getColorToken(["core", "white"])};
`;
