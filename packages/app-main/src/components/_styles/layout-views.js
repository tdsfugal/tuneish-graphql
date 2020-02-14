import styled from "@emotion/styled"

export const RowView = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  width: 100%;
`

export const ColumnView = styled.div`
  display: flex;
  flex-flow: column no-wrap;
  height: 100%;
`

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
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1rem;
  font-family: sans-serif;
  color: white;
  background: #aaa;
`

export const FooterControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  border-radius: 10% 15%;
  padding: 0px;
  margin: 16px 12px 16px 12px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: ${({ active }) => (active ? "pink" : "darkblue")};
  color: ${({ active }) => (active ? "maroon" : "white")};
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
