import React from "react"

import { NoteView } from "../_styles/fretboard-view-elements"

export default class HarmonyNote extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    const noteName = this.props.note.names[0]
    this.state = { tonic: false, noteName }
  }

  render() {
    const { stringPosition, fretPosition } = this.props
    const { noteName } = this.state
    return (
      <NoteView
        state={this.state}
        noteName={noteName}
        stringPosition={stringPosition}
        fretPosition={fretPosition}
      />
    )
  }
}
