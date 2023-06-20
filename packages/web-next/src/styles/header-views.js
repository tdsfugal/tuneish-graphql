import styled from "styled-components";
import { semantic } from "src/design/tokens";

export const HeaderView = styled.div`
  flex: 0 0 auto;
  width: 100% - 40px;
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-flow: row nowrap;
  font-family: sans-serif;
  align-items: center;
  justify-content: space-between;
  color: transparent;
  background-color: ${semantic.colors.core.secondary};
`;

export const HeaderTitleView = styled.div`
  flex: 0 0 auto;
  margin: 10px;
  font-family: sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2em;
  line-height: 2em;
  text-align: center;
  textdecoration: none;
  color: ${semantic.colors.core.white};
  background-color: transparent;
`;

// export const LogoView = styled.div`
//   flex: 0 0 50px;
//   margin: 10px;
//   height: 50px;
//   width: 50px;
// `;

// export const UserIconView = styled.div`
//   flex: 0 0 80px;
//   font-size: 1.6em;
//   line-height: 1.6em;
//   color: ${HF_FOREGROUND_COLOR};
//   margin: 10px;
//   height: 50px;
// `;

// export const UserIconBurgerView = styled.div`
//   flex: 0 0 80px;
//   display: flex;
//   flex-flow: column nowrap;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #ccc;
//   margin: 10px;
//   height: auto;
// `;

// export const UserIconItemView = styled.div`
//   flex: 0 0 auto;
//   font-size: 1.2em;
//   line-height: 1.2em;
//   width: 60px
//   color: black;
//   margin: 5px;
//   font-family: sans-serif;
//   text-align: center;
//   textdecoration: none;
// `;
