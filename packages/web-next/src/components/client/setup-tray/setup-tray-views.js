import styled from "styled-components";

import { getDimensionToken, getColorToken } from "src/design";

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
        ])}; visibility: visible; z-index: 200;`
      : `width: 0px; visibility: hidden; z-index: -10;`}
  background-color: transparent;
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  justify-content: left;
`;

export const SetupCardView = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100px;
  width: 100%;
  top: ${({ yPos }) => (yPos ? `${yPos}px` : "0px")};
  position: relative;
  background: yellow;
`;

export const SetupCardHeaderView = styled.div`
  flex: 0 0 ${getDimensionToken(["nav-items", "button_height"])};
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  align-items: top;
  background: ${getColorToken(["core", "secondary_light"])};
`;

export const SetupCardBodyView = styled.div`
  flex: 1 1 auto;
  width: 100%;
  background: gray;
`;

export const SetupCardDeleteView = styled.button`
  height: 40px;
  width: 40px;
  top: 0px;
  right: 0px;
  position: relative;
  background: blue;
`;
