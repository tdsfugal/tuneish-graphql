import styled from "@emotion/styled";

export const LayoutView = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
`;

export const RowView = styled.div`
  flex: ${(props) => props.flex || "1 1 100%"};
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-around;
  width: 100%;
  height: auto;
`;

export const ColumnView = styled.div`
  flex: ${(props) => props.flex || "1 1 100%"};
  display: flex;
  flex-flow: column nowrap;
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
