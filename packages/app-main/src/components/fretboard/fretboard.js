import React from "react"
import { connect } from "react-redux"

import { FretboardView } from "../_styles"

import FRET_POSITIONS from "../../theory/fret-positions"

import FretboardStatic from "./fretboard-static"
import FretboardNotes from "./fretboard-notes"
import FretboardHandPosition from "./fretboard-hand-position"
import FretboardTunerIndicator from "./fretboard-tuner-indicator"

const STRING_SPACING = 30
const EDGE_MARGIN = 10

const Fretboard = ({ tuning, nFrets, left_handed }) => {
  // compute the internal SVG dimensions.  Does not affect the css pixel area.
  const boardLength = 1000
  const boardWidth = 2 * EDGE_MARGIN + STRING_SPACING * (tuning.length - 1)

  // Compute the fret positions
  const fretPositions = [0]
  const scaleLength = boardLength / FRET_POSITIONS[nFrets]
  for (let fret = 1; fret < nFrets + 1; fret++) {
    const fretDist = scaleLength * FRET_POSITIONS[fret]
    left_handed
      ? fretPositions.push(boardLength - fretDist)
      : fretPositions.push(fretDist)
  }

  // Compute the string positionss (pay attention to left-handed)
  const stringPositions = tuning.map((note, string) => {
    const fromTop = left_handed ? string : tuning.length - string - 1
    return EDGE_MARGIN + STRING_SPACING * fromTop
  })

  // Render the package deal
  return (
    <FretboardView boardLength={boardLength} boardWidth={boardWidth}>
      <FretboardStatic
        tuning={tuning}
        boardLength={boardLength}
        boardWidth={boardWidth}
        stringPositions={stringPositions}
        fretPositions={fretPositions}
        left_handed={left_handed}
      />
      <FretboardHandPosition
        left_handed={left_handed}
        fretPositions={fretPositions}
      />
      <FretboardNotes
        tuning={tuning}
        boardLength={boardLength}
        boardWidth={boardWidth}
        stringPositions={stringPositions}
        fretPositions={fretPositions}
        left_handed={left_handed}
      />
      <FretboardTunerIndicator
        tuning={tuning}
        stringPositions={stringPositions}
        fretPositions={fretPositions}
        left_handed={left_handed}
      />
    </FretboardView>
  )
}

const mapStateToProps = ({ left_handed }) => {
  return { left_handed }
}

export default connect(mapStateToProps)(Fretboard)
