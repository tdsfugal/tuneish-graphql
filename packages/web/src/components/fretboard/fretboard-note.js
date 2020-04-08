import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { FretNoteView } from "../_styles"

const GET_KEY = gql`
  {
    current_key @client {
      chromaticNames
      pitches
    }
  }
`

const GET_CHORD = gql`
  {
    current_chord @client {
      pitches
    }
  }
`

const FretboardNote = ({ fret, note, stringPosition, fretPosition }) => {
  const { loading: kLoading, error: kError, data: kData } = useQuery(GET_KEY)
  const { loading: cLoading, error: cError, data: cData } = useQuery(GET_CHORD)

  if (kLoading || cLoading || !kData || !cData) return null
  if (kError) {
    console.log(`Error! ${cError.message}`)
    return null
  }
  if (cError) {
    console.log(`Error! ${cError.message}`)
    return null
  }

  const { chromaticNames, pitches: keyPitches } = kData.current_key
  const { pitches: chordPitches } = cData.current_chord
  // Check to see if note is in the chord
  let cIndex = -100
  if (chordPitches.length > 0) {
    cIndex = chordPitches.indexOf(note.pitch)
    if (cIndex < 0) return null
  }

  // Check to see if note is in the key
  const kIndex = keyPitches.indexOf(note.pitch)
  if (kIndex < 0) return null
  // Check to see if note should display
  // All is good, display the note
  return (
    <FretNoteView
      key={`no-${stringPosition}-${fretPosition}`}
      kIndex={kIndex + 1}
      cIndex={cIndex + 1}
      noteName={chromaticNames[note.pitch]}
      stringPosition={stringPosition}
      fretPosition={fretPosition}
    />
  )
}

export default FretboardNote
