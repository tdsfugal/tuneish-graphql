import styled from "@emotion/styled";

import { BI_TOKENS } from "/meta/brand";

export const MainView = styled.div`
  flex: 1 1 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${BI_TOKENS.main.background};
`;
