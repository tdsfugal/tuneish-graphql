import styled from "@emotion/styled"

// Front page

export const FrontPageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-family: sans-serif;
  text-align: center;
  background-color: ${({ active }) => (active ? "#fff" : "transparent")};
  color: ${({ active }) => (active ? "#000" : "222")};
`

export const FrontPageBlurb = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  font-family: sans-serif;
  text-align: center;
  white-space: pre-line;
  font-size: 1.3em;
  background-color: "transparent";
`

// About page

export const AboutPageBlurb = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-family: serif;
  font-size: 1em;
  width: 100%;
  height: auto;
  padding: 50px;
  margin: 50px;
  background-color: #eee;
  color: #111;
`
