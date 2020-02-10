import React from "react"
import { connect } from "react-redux"

import { HandView } from "./fretboard-view-elements"

const EXTRA_WIDTH = 20

const FretboardHandPosition = ({
  left_handed,
  fretPositions,
  range_focus,
  low_fret,
  high_fret,
}) => {
  if (range_focus) {
    let xMin
    let xMax
    if (left_handed) {
      xMin = fretPositions[high_fret] - EXTRA_WIDTH
      xMax = fretPositions[low_fret] + EXTRA_WIDTH
    } else {
      xMin = fretPositions[low_fret] - EXTRA_WIDTH
      xMax = fretPositions[high_fret] + EXTRA_WIDTH
    }
    return (
      <svg id="fretboard-hand-position">
        <HandView xMin={xMin} xMax={xMax} />
      </svg>
    )
  }
  return null
}

const mapStateToProps = state => {
  return {
    range_focus: state.range_focus,
    low_fret: state.hand_range.low_fret,
    high_fret: state.hand_range.high_fret,
  }
}

export default connect(mapStateToProps)(FretboardHandPosition)
