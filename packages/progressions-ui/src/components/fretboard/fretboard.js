import React from "react"

import FRET_POSITIONS from "../../theory/fret-positions"

import FretboardStatic from "./static/fretboard-static"
import FretboardNotes from "./notes/fretboard-notes"

const STRING_SPACING = 30
const EDGE_MARGIN = 10

export default ({ tuning, nFrets, left }) => {
  // compute the board dimensions
  const boardLength = 1000
  const boardWidth = 2 * EDGE_MARGIN + STRING_SPACING * (tuning.length - 1)

  // Compute the fret positions
  const fretPositions = [0]
  const scaleLength = boardLength / FRET_POSITIONS[nFrets]
  for (let fret = 1; fret < nFrets + 1; fret++) {
    fretPositions.push(scaleLength * FRET_POSITIONS[fret])
  }

  // Compute the string positionss (pay attention to left-handed)
  const stringPositions = tuning.map((note, string) => {
    const fromTop = left ? string : tuning.length - string - 1
    return EDGE_MARGIN + STRING_SPACING * fromTop
  })

  // Render the package deal
  const viewDims = `-15 -15 ${boardLength + 30} ${boardWidth + 30}`
  return (
    <svg viewBox={viewDims} xmlns="http://www.w3.org/2000/svg">
      <FretboardStatic
        tuning={tuning}
        left={left}
        boardLength={boardLength}
        boardWidth={boardWidth}
        stringPositions={stringPositions}
        fretPositions={fretPositions}
      />
      <FretboardNotes
        tuning={tuning}
        left={left}
        boardLength={boardLength}
        boardWidth={boardWidth}
        stringPositions={stringPositions}
        fretPositions={fretPositions}
      />
    </svg>
  )
}
