import { createGlobalStyle } from "styled-components";
import { semantic } from "/src/design/tokens";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .body {
    background-color: ${semantic.colors.core.white};
  }
  html,
  body {
    padding: 0;
    margin: 0;
    background: ${semantic.colors.core.white};
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  svg {
    overflow: visible;
  }

  p {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
`;
