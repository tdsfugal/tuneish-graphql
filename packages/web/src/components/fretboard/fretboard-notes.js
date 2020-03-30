import React from "react"

import { Notes } from "../../theory"

import FretboardNote from "./fretboard-note"

const notes = new Notes()

const FretboardNotes = ({
  tuning,
  boardLength,
  boardWidth,
  stringPositions,
  fretPositions,
}) => {
  // Compile a list of note elemeents, one for each string/fret combination.
  // These active components listen to the state cashe for clues about
  // how to render themselves.  These clues include the current key, the
  // active chord (if any), and the range of the hand focus.
  const noteElements = []
  for (let string = 0; string < stringPositions.length; string++) {
    // For each string, get the root note (at the nut) by it's midi value
    const { tone, oct } = tuning[string]
    const rootNoteMidi = notes.getMidi({ tone, oct })
    // Walk down the string adding a note element for each fret.
    if (rootNoteMidi) {
      for (let fret = 0; fret < fretPositions.length; fret++) {
        const note = notes.getNoteByMidi(rootNoteMidi + fret)
        noteElements.push(
          <FretboardNote
            key={`n_${string}_${fret}`}
            fret={fret}
            note={note}
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
