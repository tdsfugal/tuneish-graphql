import React from "react"

import FRET_POSITIONS from "../../theory/fret-positions"

import FretboardStatic from "./static/fretboard-static"
import FretboardNotes from "./notes/fretboard-notes"

const STRING_SPACING = 30
const EDGE_MARGIN = 10

const computeFretPosition = (fret, scaleLength) => {
  return scaleLength * FRET_POSITIONS[fret]
}

const computeStringPosition = string => {
  return EDGE_MARGIN + STRING_SPACING * string
}

export default ({ tuning, nFrets }) => {
  // compute the board dimensions
  const boardLength = 1000
  const boardWidth = 2 * EDGE_MARGIN + STRING_SPACING * (tuning.length - 1)

  // Compute the fret positions
  const fretPositions = [0]
  const scaleLength = boardLength / FRET_POSITIONS[nFrets]
  for (let fret = 1; fret < nFrets + 1; fret++) {
    fretPositions.push(computeFretPosition(fret, scaleLength))
  }

  // Compute the string positionss
  const stringPositions = tuning.map((note, string) => {
    return computeStringPosition(string)
  })

  // Render the package deal
  return (
    <div width="100%">
      <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
        <FretboardStatic
          tuning={tuning}
          boardLength={boardLength}
          boardWidth={boardWidth}
          stringPositions={stringPositions}
          fretPositions={fretPositions}
        />
        <FretboardNotes
          tuning={tuning}
          boardLength={boardLength}
          boardWidth={boardWidth}
          stringPositions={stringPositions}
          fretPositions={fretPositions}
        />
      </svg>
    </div>
  )
}
