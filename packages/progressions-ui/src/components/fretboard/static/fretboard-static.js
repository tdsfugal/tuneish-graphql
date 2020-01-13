import React from "react"

import {
  BoardView,
  FretView,
  StringView,
} from "../_styles/fretboard-view-elements"

export default ({
  tuning,
  left,
  boardLength,
  boardWidth,
  stringPositions,
  fretPositions,
}) => {
  // Compute the board
  const board = <BoardView boardLength={boardLength} boardWidth={boardWidth} />

  // Compute the frets
  const frets = fretPositions.map((xPos, fret) => {
    return <FretView key={`f_${fret}`} xPos={xPos} boardWidth={boardWidth} />
  })

  // Compute the strings
  const strings = stringPositions.map((yPos, string) => {
    return <StringView key={`s_${string}`} yPos={yPos} length={boardLength} />
  })

  // Render the package deal
  return (
    <svg id="fretboard-static">
      {board}
      {frets}
      {strings}
    </svg>
  )
}
