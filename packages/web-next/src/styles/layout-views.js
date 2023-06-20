import styled from "styled-components";
import { semantic } from "/src/design/tokens";

export const LayoutView = styled.div`
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
  background-color: ${semantic.colors.core.white};
  color: #000000;
  font-familyL -apple-system, Roboto, sans-serif, serif;
`;

export const RowView = styled.div`
  flex: ${(props) => props.flex || "1 1 100%"};
  display: flex;
  flex-flow: row nowrap;
  contain: content;
  align-items: stretch;
  justify-content: space-around;
  width: 100%;
  height: auto;
`;

export const ColumnView = styled.div`
  flex: ${(props) => props.flex || "1 1 100%"};
  display: flex;
  flex-flow: column nowrap;
  contain: content;
  align-items: stretch;
  justify-content: space-around;
  height: 100%;
  width: auto;
`;

export const ItemView = styled.div`
  flex: ${(props) => props.flex || "1 1 100%"};
  contain: content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
