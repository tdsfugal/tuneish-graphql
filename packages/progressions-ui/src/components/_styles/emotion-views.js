import styled from "@emotion/styled"

export const LayoutView = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`

export const HeaderView = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  font-family: sans-serif;
  color: white;
  background: #aaa;
`

export const MainView = styled.div`
  flex: 1 1 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: darkseagreen;
`

export const FooterView = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1rem;
  font-family: sans-serif;
  color: white;
  background: #aaa;
`

export const FooterControl = styled.div`
  width: 100px;
  height: 62px;
  font-family: sans-serif;
  font-size: 20;
  font-weight: bold;
  background-color: ${({ active }) => (active ? "pink" : "darkblue")};
  color: ${({ active }) => (active ? "maroon" : "white")};
  padding: 0px;
  margin: 16px 24px 16px 24px;
  text-align: center;
`

export const HeaderTitleView = styled.div`
  margin: 0px;
  padding: 20px;
  font-family: sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  line-height: 1.1;
  color: white;
  textdecoration: none;
`

export const LogoView = styled.div`
  padding: 10px;
  margin: 10px;
`

export const CircleView = styled.div``

export const BassView = styled.div``
