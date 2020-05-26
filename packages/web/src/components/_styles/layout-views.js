import styled from "@emotion/styled"

const HF_BACKGROUND_COLOR = "rebeccapurple"
const HF_FOREGROUND_COLOR = "white"

const MAIN_BACKGROUND_COLOR = "darkseagreen"
const MAIN_FOREGROUND_COLOR = "rebeccapurple"

export const LayoutView = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
`
// ============== Header section =================================

export const HeaderView = styled.div`
  flex: 0 0 auto;
  width: 100% - 40px;
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-flow: row nowrap;
  font-family: sans-serif;
  align-items: center;
  justify-content: space-between;
  color: ${HF_FOREGROUND_COLOR};
  background: ${HF_BACKGROUND_COLOR};
`

export const HeaderTitleView = styled.div`
  flex: 0 0 auto;
  margin: 10px;
  font-family: sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2em;
  line-height: 2em;
  color: white;
  text-align: center;
  textdecoration: none;
`

export const LogoView = styled.div`
  flex: 0 0 50px;
  margin: 10px;
  height: 50px;
  width: 50px;
`

export const UserIconView = styled.div`
  flex: 0 0 80px;
  font-size: 1.6em;
  line-height: 1.6em;
  color: ${HF_FOREGROUND_COLOR};
  margin: 10px;
  height: 50px;
`

export const UserIconBurgerView = styled.div`
  flex: 0 0 80px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
  margin: 10px;
  height: auto;
`

export const UserIconItemView = styled.div`
  flex: 0 0 auto;
  font-size: 1.2em;
  line-height: 1.2em;
  width: 60px
  color: black;
  margin: 5px;
  font-family: sans-serif;
  text-align: center;
  textdecoration: none;
`

// ============== Main section =================================

export const MainView = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 80%;
  color: ${MAIN_FOREGROUND_COLOR};
  background: ${MAIN_BACKGROUND_COLOR};
`

export const MainScrollView = styled.div`
  margin: auto;
  max-height: 100%;
  overflow-y: scroll;
`
// Use these utility classes to lay out the interior of the main space.

export const RowView = styled.div`
  flex: ${props => props.flex || "1 1 100%"};
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-around;
  width: 100%;
  height: auto;
`

export const ColumnView = styled.div`
  flex: ${props => props.flex || "1 1 100%"};
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: space-around;
  height: 100%;
  width: auto;
`

export const ItemView = styled.div`
  flex: ${props => props.flex || "1 1 100%"};
  contain: content;
  display: flex;
  justify-content: center;
  align-items: center;
`

// ============== Footer section =================================

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
`

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
`
