import styled from "@emotion/styled";
import { semantic } from "/src/design/tokens";

export const MainView = styled.div`
  flex: 1 1 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${semantic.colors.core.primary};
`;
