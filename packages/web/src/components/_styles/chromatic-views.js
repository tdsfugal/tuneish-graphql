import styled from "@emotion/styled"

export const ChromaticView = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: auto;
  overflow: hidden;
`

export const ChromaRowView = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex0flow: row nowrap;
  background-color: #eee;
  width: 100%;
`

export const ChromaNoteView = styled.div`
  width: 50px;
  height: 2em;
  background-color: ${({ color }) => color || "transparent"};
  text-align: center;
  border: solid 1px #ccc;
  line-height: 2em;
`
