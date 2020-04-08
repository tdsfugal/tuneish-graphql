import styled from "@emotion/styled"

export const ChordConsoleView = styled.div`
  background-color: lightgray;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

export const ChordColumnView = styled.div`
  flex: 1 1 40px;
  height: auto;
  margin: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: top;
  background-color: white;
`

export const ChordItemView = styled.div`
  flex: 0 0 1.2em;
  line-height: 1.2em;
  text-size: 1.2em;
`

export const ChordItemPadView = styled.div`
  flex: 1 1 1em;
`

export const ChordSelectionView = styled.div`
  flex: 0 0 1.2em;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  & :hover {
    background-color: #bca;
  }
`

export const ChordConsoleButtonView = styled.div`
  background-color: gray;
  height: 2em;
  width: 100%;
  line-height: 2em;
  text-size: 1.2em;
  text-align: center;
  color: white;
`
