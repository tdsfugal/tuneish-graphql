import React from "react"

import Notes from "../../theory/notes"

import FretboardNote from "./fretboard-note"

const notes = new Notes()

const FretboardNotes = ({
  tuning,
  boardLength,
  boardWidth,
  stringPositions,
  fretPositions,
}) => {
  // Compute the notes.  These are active components that listen to the cache
  // to determine how to render themselves.  Many are invisible.
  const noteElements = []
  for (let string = 0; string < stringPositions.length; string++) {
    const { name, octave } = tuning[string]
    const rootNoteMidis = notes.getMidisByName(name)
    const rootNoteMidi = rootNoteMidis[octave]
    if (rootNoteMidi) {
      for (let fret = 0; fret < fretPositions.length; fret++) {
        noteElements.push(
          <FretboardNote
            key={`n_${string}_${fret}`}
            fret={fret}
            note={notes.getNoteByMidi(rootNoteMidi + fret)}
            stringPosition={stringPositions[string]}
            fretPosition={fretPositions[fret]}
          />
        )
      }
    }
  }

  return <svg id="fretboard-notes">{noteElements}</svg>
}

export default FretboardNotes
