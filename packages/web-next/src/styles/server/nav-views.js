import styled from "styled-components";
import { getDimensionToken } from "src/design";

export const NavWrapper = styled.div`
  flex: 0 0 ${getDimensionToken(["layout", "nav_width"])};
  height: 100%;
  padding: 0;
  display: box;
  position: relative;
  background-color: transparent;
`;

export const NavView = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  padding: 0;
  display: flex;
  position: absolute;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

export const FastLinksWrapperView = styled.div`
  flex: 1 1 auto;
  width: ${getDimensionToken(["layout", "nav_width"])};
  background-color: transparent;
  border: 1px solid red;
  position: relative;
  z-index: 0;
`;
