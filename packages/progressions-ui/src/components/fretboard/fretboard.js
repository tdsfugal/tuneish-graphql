import React from "react"

import FRET_POSITIONS from "../../theory/fret-positions"

import FretboardView from "./fretboard-view"

const STRING_SPACING = 30
const EDGE_MARGIN = 10

const computeFretPosition = (fret, scaleLength) => {
  return scaleLength * FRET_POSITIONS[fret]
}

const computeStringPosition = string => {
  return EDGE_MARGIN + STRING_SPACING * string
}

export default ({ tuning, nFrets }) => {
  const boardLength = 1000
  const boardWidth = 2 * EDGE_MARGIN + STRING_SPACING * (tuning.length - 1)

  // Compute the frets
  const fretPositions = [0]
  const scaleLength = boardLength / FRET_POSITIONS[nFrets]
  for (let fret = 1; fret < nFrets + 1; fret++) {
    fretPositions.push(computeFretPosition(fret, scaleLength))
  }

  // Compute the strings
  const stringPositions = tuning.map((note, string) => {
    return computeStringPosition(string)
  })

  // Compute the notes

  // Render the package deal
  return (
    <FretboardView
      tuning={tuning}
      boardLength={boardLength}
      boardWidth={boardWidth}
      stringPositions={stringPositions}
      fretPositions={fretPositions}
    />
  )
}
