import React from "react"
import { connect } from "react-redux"

import { FretNoteView } from "./fretboard-view-elements"

const HarmonyNote = ({
  fret,
  stringPosition,
  fretPosition,
  current_key,
  note,
  hand_indicator,
  low_fret,
  high_fret,
}) => {
  // Check to see if note is in the key
  const index = current_key.tones.indexOf(note.tone)
  // Check to see if note should display
  if (index < 0 || (hand_indicator && !(fret >= low_fret && fret <= high_fret)))
    return null
  // All is good, display the note
  return (
    <FretNoteView
      key={`no-${stringPosition}-${fretPosition}`}
      scaleIndex={index + 1}
      noteName={current_key.notes[index]}
      stringPosition={stringPosition}
      fretPosition={fretPosition}
    />
  )
}

const mapStateToProps = ({ current_key, hand_indicator, hand_range }) => {
  return {
    current_key,
    hand_indicator,
    low_fret: hand_range.low_fret,
    high_fret: hand_range.high_fret,
  }
}

export default connect(mapStateToProps)(HarmonyNote)
