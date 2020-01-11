import React from "react"

const FrettedNoteView = ({ noteName, state, stringPosition, fretPosition }) => {
  const color = state.tonic ? "grey" : "green"
  return (
    <>
      <circle r={10} cx={fretPosition} cy={stringPosition} fill={color} />
      <text
        x={(fretPosition - 5).toString()}
        y={(stringPosition + 5).toString()}
        fill={"white"}
        style={{ fontSize: 14 }}
      >
        {noteName}
      </text>
    </>
  )
}

export default class FrettedNote extends React.Component {
  constructor(props) {
    super(props)
    const noteName = this.props.note
    this.state = { tonic: false, noteName }
  }

  render() {
    const { stringPosition, fretPosition } = this.props
    const { noteName } = this.state
    return (
      <FrettedNoteView
        state={this.state}
        noteName={noteName}
        stringPosition={stringPosition}
        fretPosition={fretPosition}
      />
    )
  }
}
