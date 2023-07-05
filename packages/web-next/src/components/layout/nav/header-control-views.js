import styled from "styled-components";
import { getDimensionToken, getColorToken } from "src/design";

export const HeaderControlView = styled.div`
  flex: 0 0 ${getDimensionToken(["layout", "header_height"])};
  width: ${getDimensionToken(["layout", "nav_width"])};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  z-index: 0;
  background-color: transparent;
`;

export const HeaderButtonTextView = styled.label`
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
  color: ${getColorToken(["core", "primary"])};
`;
