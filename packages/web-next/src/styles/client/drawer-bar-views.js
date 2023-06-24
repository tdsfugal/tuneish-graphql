import styled from "styled-components";
import { getDimensionToken } from "src/design";

export const DrawerBarView = styled.div`
  width:  ${({ height }) =>
    height | getDimensionToken(["default", "button_height"])}
  height:${({ width }) =>
    width | getDimensionToken(["default", "button_width"])}
  position: relative; 
  padding: 0;
  margin: 0;
  background-color: transparent;
  z-index: 50;
`;

export const DrawerView = styled.div`
  width: 100vw;
  height: ${({ height }) => height | "100%"}
  position: absolute;
  padding: 0;
  margin: 0;
  background-color: pink;
  z-index: 100;
`;
