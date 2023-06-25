import styled from "styled-components";

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
