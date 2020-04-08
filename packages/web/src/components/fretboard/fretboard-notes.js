import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { Notes } from "../../theory"

import FretboardNote from "./fretboard-note"

const GET_RANGE = gql`
  {
    fretboard @client {
      range_focus {
        active
        low
        high
      }
    }
  }
`

const notes = new Notes()

const FretboardNotes = ({
  tuning,
  boardLength,
  boardWidth,
  stringPositions,
  fretPositions,
}) => {
  // Get the range focus
  const { loading, error, data } = useQuery(GET_RANGE)
  const { active, low, high } =
    loading || error || !data || !data.fretboard || !data.fretboard.range_focus
      ? { active: false, low: 0, high: fretPositions.length }
      : data.fretboard.range_focus

  // const { active, low, high } = { active: true, low: 3, high: 7 }
  // Compile a list of note elemeents, one for each string/fret combination.
  // These active components listen to the state cashe for clues about
  // how to render themselves.  These clues include the current key, the
  // active chord (if any), and the range of the hand focus.
  const noteElements = []
  for (let string = 0; string < stringPositions.length; string++) {
    // For each string, get the root note (at the nut) by it's midi value
    const { pitch, oct } = tuning[string]
    const rootNoteMidi = notes.getMidi({ pitch, oct })
    // Walk down the string adding a note element for each fret.
    if (rootNoteMidi) {
      for (
        let fret = active ? low : 0;
        fret < (active ? high : fretPositions.length);
        fret++
      ) {
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
