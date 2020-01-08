import React from "react"

const FrettedNoteView = ({ state, stringPosition, fretPosition }) => {
  const color = state.tonic ? "grey" : "green"
  return (
    <>
      <circle r={10} cx={fretPosition} cy={stringPosition} fill={color} />
      <text
        x={(fretPosition - 6).toString()}
        y={(stringPosition + 7).toString()}
        fill={"white"}
      >
        {"A"}
      </text>
    </>
  )
}

export default class FrettedNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tonic: false }
  }

  render() {
    const { stringPosition, fretPosition } = this.props
    return (
      <FrettedNoteView
        state={this.state}
        stringPosition={stringPosition}
        fretPosition={fretPosition}
      />
    )
  }
}
