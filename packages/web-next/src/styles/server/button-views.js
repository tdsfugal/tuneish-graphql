import styled from "styled-components";
import { getDimensionToken } from "src/design";

export const ToggleButtonView = styled.button`
  width:  ${({ height }) =>
    height | getDimensionToken(["default", "button_height"])};
  }}
  }height:${({ width }) =>
    width | getDimensionToken(["default", "button_width"])}
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: transparent; 
`;

export const ButtonVisualView = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 5px;
`;
