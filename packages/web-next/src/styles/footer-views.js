import styled from "@emotion/styled";

export const FooterView = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 60px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1rem;
  font-family: sans-serif;
  color: ${HF_FOREGROUND_COLOR};
  background: ${HF_BACKGROUND_COLOR};
`;

export const FooterControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 10% 15%;
  padding: 0px;
  margin: 16px 12px 16px 12px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: ${({ active }) => (active ? "pink" : "darkblue")};
  color: ${({ active }) => (active ? "maroon" : "white")};
`;
