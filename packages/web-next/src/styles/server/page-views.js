import styled from "styled-components";
import { getDimensionToken, getColorToken } from "/src/design";

export const PageView = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  background-color: ${getColorToken(["core", "white"])};
  color: ${getColorToken(["core", "black"])};
  font-family: -apple-system, Roboto, sans-serif, serif;
  z-index: 0;
`;

export const MainWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  height: 100%;
  padding: 0;
  margin: 0;
  display: box;
  overflow: hidden;
  background-color: transparent;
`;

export const NavWrapper = styled.div`
  position: relative;
  flex: 0 0 ${getDimensionToken(["layout", "nav_width"])};
  height: 100%;
  padding: 0;
  margin: 0;
  display: box;
  overflow: hidden;
  background-color: transparent;
`;
