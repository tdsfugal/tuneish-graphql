import React from "react"

import { NoteView } from "../_styles/fretboard-view-elements"

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
      <NoteView
        state={this.state}
        noteName={noteName}
        stringPosition={stringPosition}
        fretPosition={fretPosition}
      />
    )
  }
}
