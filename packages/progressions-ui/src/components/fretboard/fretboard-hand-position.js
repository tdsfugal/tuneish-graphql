import React from "react"
import { connect } from "react-redux"

import { HandView } from "./fretboard-view-elements"

const EXTRA_WIDTH = 20

const FretboardHandPosition = ({
  fretPositions,
  hand_indicator,
  low_fret,
  high_fret,
}) => {
  if (hand_indicator) {
    const xLow = fretPositions[low_fret] - EXTRA_WIDTH
    const xHigh = fretPositions[high_fret] + EXTRA_WIDTH
    return (
      <svg id="fretboard-hand-position">
        <HandView xLow={xLow} xHigh={xHigh} />
      </svg>
    )
  }
  return null
}

const mapStateToProps = state => {
  return {
    hand_indicator: state.hand_indicator,
    low_fret: state.hand_range.low_fret,
    high_fret: state.hand_range.high_fret,
  }
}

export default connect(mapStateToProps)(FretboardHandPosition)
