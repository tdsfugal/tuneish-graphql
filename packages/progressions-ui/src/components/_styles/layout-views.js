import styled from "@emotion/styled"

export const LayoutView = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

export const HeaderView = styled.div`
  flex: none;
  display: flex;
  flexdirection: row;
  background: #aaa;
  width: 100%;
`

export const MainView = styled.div`
  flex: auto;
  display: flex;
  flexdirection: column;
  background: darkseagreen;
  height: 100%;
  width: 100%;
`

export const FooterView = styled.div`
  flex: none;
  display: flex;
  flexdirection: row;
  background: #aaa;
  width: 100%;
`

export const HeaderTitleView = styled.div`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  line-height: 1.1;
  color: white;
  textdecoration: none;
`

export const LogoView = styled.div`
  padding: 10px;
  margin: 20px;
  background: #5ab;
`
