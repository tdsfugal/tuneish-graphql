import styled from "styled-components";
import { getColorToken } from "src/design";

const BackgroundView = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: -100;
`;

export const SimpleBackgroundView = styled(BackgroundView)`
  background-color: ${({ $colorToken }) => {
    return $colorToken ? getColorToken($colorToken) : "transparent";
  }};
`;
