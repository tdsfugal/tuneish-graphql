import React from "react"
import { connect } from "react-redux"

const FretboardTunerIndicator = ({
  tuning,
  boardLength,
  boardWidth,
  stringPositions,
  fretPositions,
  left,
  freq,
  note,
  cent,
}) => {
  return null
}

const mapStateToProps = ({
  hand_indicator,
  hand_range,
  fast_note,
  left_handed,
}) => {
  return {
    left: left_handed,
    freq: fast_note.freq,
    note: fast_note.note,
    cent: fast_note.cent,
    hand_indicator: hand_indicator,
    low_fret: hand_range.low_fret,
    high_fret: hand_range.high_fret,
  }
}

export default connect(mapStateToProps)(FretboardTunerIndicator)
