import React from "react"
import { connect } from "react-redux"

import { NoteView } from "../_styles/fretboard-view-elements"

const HarmonyNote = props => {
  const { stringPosition, fretPosition, current_key, note } = props
  // Check to see if note is in the key
  const index = current_key.tones.indexOf(note.tone)
  if (index >= 0) {
    return (
      <NoteView
        noteName={current_key.notes[index]}
        stringPosition={stringPosition}
        fretPosition={fretPosition}
      />
    )
  }
  return null
}

const mapStateToProps = ({ current_key }) => {
  return { current_key }
}

export default connect(mapStateToProps)(HarmonyNote)
