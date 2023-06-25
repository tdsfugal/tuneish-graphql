import styled from "styled-components";
import { getDimensionToken } from "src/design";

import { ButtonVisualView } from "./button-views";

export const FooterControlView = styled.div`
  flex: 0 0 ${getDimensionToken(["layout", "footer_height"])};
  width: ${getDimensionToken(["layout", "nav_width"])};
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: transparent;
`;

export const FooterButtonTextView = styled(ButtonVisualView)`
  font-size: 1.5em;
  text-align: center;
  line-height: 100%;
  font-weight: bold;
`;

// export const FooterView = styled.div`
//   flex: 0 0 auto;
//   width: 100%;
//   height: 60px;
//   padding: 0px 10px 0px 10px;
//   display: flex;
//   flex-flow: row nowrap;
//   font-size: 1rem;
//   font-family: sans-serif;
// `;
