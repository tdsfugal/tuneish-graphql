import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { FretNoteView } from "../_styles"

const GET_FRETBOARD_NOTE = gql`
  {
    current_key @client {
      chromaticNames
      tones
    }
    fretboard @client {
      range_focus {
        active
        low
        high
      }
    }
  }
`

const FretboardNote = ({ fret, note, stringPosition, fretPosition }) => {
  const { loading, error, data } = useQuery(GET_FRETBOARD_NOTE)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const {
    current_key: { chromaticNames, tones },
    fretboard: {
      range_focus: { active, low, high },
    },
  } = data

  // Check to see if note is in the key
  const index = tones.indexOf(note.tone)
  // Check to see if note should display
  if (index < 0 || (active && !(fret >= low && fret <= high))) return null
  const noteName = chromaticNames[note.tone]
  // All is good, display the note
  return (
    <FretNoteView
      key={`no-${stringPosition}-${fretPosition}`}
      scaleIndex={index + 1}
      noteName={noteName}
      stringPosition={stringPosition}
      fretPosition={fretPosition}
    />
  )
}

export default FretboardNote
