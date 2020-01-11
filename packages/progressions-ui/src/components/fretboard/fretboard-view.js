import React from "react"

import { BoardView, FretView, StringView } from "./fretboard-view-elements"
import FrettedNote from "./fretted-note"

export default ({
  tuning,
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

  // Compute the notes.  These are active components that listen to the Redux state
  // to determine how to render themselves.  Many are invisible.
  const notes = []
  for (let string = 0; string < stringPositions.length; string++) {
    const rootNote = tuning[string]
    for (let fret = 0; fret < fretPositions.length; fret++) {
      notes.push(
        <FrettedNote
          key={`n_${string}_${fret}`}
          note={rootNote}
          stringPosition={stringPositions[string]}
          fretPosition={fretPositions[fret]}
        />
      )
    }
  }

  // Render the package deal
  return (
    <div width="100%">
      <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
        {board}
        {frets}
        {strings}
        {notes}
      </svg>
    </div>
  )
}
