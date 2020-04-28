import styled from "@emotion/styled"

export const FormFrameView = styled.form`
  display: flex;
  flex-flow: column nowrap;
  height: auto;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  margin: 0;
  padding: 10px 30px 0px 30px;
  border-radius: 10px;
  background-color: #ddd;
`

export const InputLabelView = styled.label`
  flex: 1 1 1.6em;
  line-height: 1.6em;
  font-size: 0.9em;
  width: 100%;
  margin: 10px 20px 0px 20px;
  padding: 0;
  font-family: sans-serif;
  color: black;
`

export const InputItemView = styled.input`
  flex: 1 1 1.4em;
  line-height: 1.4em;
  font-size: 1em;
  font-family: sans-serif;
  color: black;
  width: 100%;
  margin: 0px 20px 10px 20px;
  padding: 0;
  ${props => {
    if (props.ok !== undefined)
      return props.ok
        ? "box-shadow: 1px 0px 5px green"
        : "box-shadow: 1px 0px 5px red"
  }};
`
// Note: props.ok === undefined is interpreted as true
export const ButtonView = styled.button`
  flex: 1 1 2em;
  width: 100%;
  margin: 30px;
  padding: 0;
  font-family: sans-serif;
  font-size: 1.2em;
  line-height: 1.2em;
  border-radius: 5px;
  background-color: ${props => (props.ok === false ? "#EEE" : "#FFF")};
  color: ${props => (props.ok === false ? "#999" : "#000")};
`
