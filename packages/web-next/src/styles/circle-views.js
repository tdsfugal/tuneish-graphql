import styled from "@emotion/styled";

const MAX_GROW = 1.2;
const MIN_GROW = 0.7;

export const CircleView = styled.div`
  max-height: ${(props) => `${props.box * MAX_GROW}px`};
  max-width: ${(props) => `${props.box * MAX_GROW}px`};
  min-height: ${(props) => `${props.box * MIN_GROW}px`};
  min-width: ${(props) => `${props.box * MIN_GROW}px`};
  width: 100%;
  height: 100%;
  background-color: blue;
`;
