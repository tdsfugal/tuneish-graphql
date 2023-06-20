import styled from "styled-components";

export const NavWrapper = styled.div`
  flex: 0 0 60px;
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

export const HeaderWrapperView = styled.div`
  flex: 0 0 60px;
  width: 60px;
  background-color: green;
`;

export const FastLinksWrapperView = styled.div`
  flex: 1 1 auto;
  width: 60px;
  background-color: transparent;
  border: 1px solid red;
`;

export const FooterWrapperView = styled.div`
  flex: 0 0 40px;
  width: 60px;
  background-color: yellow;
`;
