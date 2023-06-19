import styled from "@emotion/styled";
import { getColorToken } from "src/design";

const BackgroundView = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: -100;
  color: transparent;
`;

export const SimpleBackgroundView = styled(BackgroundView)`
  background-color: ${({ colorToken }) => getColorToken(colorToken)};
`;
