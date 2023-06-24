import styled from "styled-components";
import { ButtonVisualView } from "./button-views";

export const HeaderView = styled.div`
  width: 100vw;
  height: 100%;
  padding: 0px;
  display: flex;
  position: relative;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;

export const HeaderButtonTextView = styled(ButtonVisualView)`
  font-size: 1.5em;
  text-align: center;
  line-height: 100%;
  font-weight: bold;
`;

// export const HeaderTitleView = styled.div`
//   flex: 0 0 auto;
//   margin: 10px;
//   font-family: sans-serif;
//   font-weight: bold;
//   text-rendering: optimizeLegibility;
//   font-size: 2em;
//   line-height: 2em;
//   text-align: center;
//   textdecoration: none;
//   color: ${semantic.colors.core.white};
//   background-color: transparent;
// `;

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
