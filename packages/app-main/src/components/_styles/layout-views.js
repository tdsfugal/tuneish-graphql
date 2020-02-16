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
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  font-family: sans-serif;
  color: ${HF_FOREGROUND_COLOR};
  background: ${HF_BACKGROUND_COLOR};
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

// ============== Main section =================================

export const MainView = styled.div`
  flex: 1 1 80%;
  width: 100%;
  color: ${MAIN_FOREGROUND_COLOR};
  background: ${MAIN_BACKGROUND_COLOR};
`
// Use these utility classes to lay out the interior of the main space.

export const RowView = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  width: 100%;
  height: auto;
`

export const ColumnView = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  height: 100%;
  width: auto;
`
// ============== Footer section =================================

export const FooterView = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  padding: 0px 20px 0px 20px;
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
  height: 60px;
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
