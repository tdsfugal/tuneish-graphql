import React from "react"

import HarmonyNote from "./harmony-note"

export default ({
  tuning,
  boardLength,
  boardWidth,
  stringPositions,
  fretPositions,
}) => {
  // Compute the notes.  These are active components that listen to the Redux state
  // to determine how to render themselves.  Many are invisible.
  const notes = []
  for (let string = 0; string < stringPositions.length; string++) {
    const rootNote = tuning[string]
    for (let fret = 0; fret < fretPositions.length; fret++) {
      notes.push(
        <HarmonyNote
          key={`n_${string}_${fret}`}
          note={rootNote}
          stringPosition={stringPositions[string]}
          fretPosition={fretPositions[fret]}
        />
      )
    }
  }

  return <svg id="fretboard-notes">{notes}</svg>
}
