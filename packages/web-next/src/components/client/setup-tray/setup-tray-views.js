import styled from "styled-components";

import { getDimensionToken } from "src/design";

export const SetupTrayView = styled.div`
  height: calc(
    100vh - ${getDimensionToken(["layout", "header_height"])} -
      ${getDimensionToken(["layout", "footer_height"])}
  );
  position: absolute;
  left: 0px;
  top: ${getDimensionToken(["layout", "header_height"])};
  ${({ active }) =>
    active
      ? `width: ${getDimensionToken([
          "layout",
          "setup_width",
        ])}; visibility: visible; background-color: rgba(0,0,0,.2); z-index: 200;`
      : `width: 0px; visibility: hidden; background-color: transparent; z-index: -10;`}
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  justify-content: left;
`;

export const SetupTrayCardView = styled.div`
  height: 100px;
  width: 100%;
  top: ${({ yPos }) => (yPos ? `${yPos}px` : "0px")};
  position: relative;
  background: yellow;
`;
