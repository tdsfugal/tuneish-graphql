import styled from "@emotion/styled";

// TODO - make this more efficient.  Way too many copies will be created.
import design from "/meta/design.json";

export const MainView = styled.div`
  flex: 1 1 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${design.palette.dominant};
`;
