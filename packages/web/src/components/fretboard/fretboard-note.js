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

  // Set some flags
  const keyActive = keyPitches.length > 0
  const chordActive = chordPitches.length > 0

  // See if note is in the chord
  let cIndex
  if (chordActive) {
    cIndex = chordPitches.indexOf(note.pitch) + 1
    // value of zero indicates that it is not in the chord
    if (cIndex < 1) cIndex = 0
  } else {
    // Indicate to the view that a chord is not active
    cIndex = -100
  }

  // See if note is in the key.
  let kIndex
  if (keyActive) {
    kIndex = keyPitches.indexOf(note.pitch) + 1
    // value of zero indicates that it is not in the key
    if (kIndex < 1) kIndex = 0
  } else {
    kIndex = -100
  }

  return (
    <FretNoteView
      key={`no-${stringPosition}-${fretPosition}`}
      colors={pickColors(kIndex, cIndex)} 
      noteName={chromaticNames[note.pitch]}
      stringPosition={stringPosition}
      fretPosition={fretPosition}
    />
  )
}

function pickColors(kIndex, cIndex) {
  let ringColorIndex = 0
  let fillColorIndex = 0
  let textColorIndex = 0

  if (kIndex < 0) {
    // ==== Mo Key is set ======
    if (cIndex < 0) {
      // ----- No chord is set -------
      // Display all the notes in plain vanilla form
      fillColorIndex = 3
      textColorIndex = 1
    } else if (cIndex === 0) {
      // ----- This note is not in the chord -------
      // Display nothing; use the default settings
    } else if (cIndex === 1) {
      // ----- This note is the root of the chord -------
      ringColorIndex = 1
      fillColorIndex = 2
      textColorIndex = 2
    } else {
      // ----- This note is in the chord but not the root-------
      fillColorIndex = 3
      textColorIndex = 1
    }
  } else if (kIndex === 0) {
    // ==== A Key is set, but this note is not in it ======
    if (cIndex <= 0) {
      // ----- No chord is set, or this note is not in it -------
      // Display nothing
    } else if (cIndex === 1) {
      // ----- This note is the root of the chord -------
      // Display nothing
    } else {
      // ----- This note is in the chord but not the root-------
      // Display nothing
    }
  } else if (kIndex === 1) {
    // ==== This note is the root note for the key ======
    if (cIndex < 0) {
      // ----- No chord is set -------
      ringColorIndex = 2
      fillColorIndex = 3
      textColorIndex = 1
    } else if (cIndex === 0) {
      // ----- This note is not in the chord -------
      ringColorIndex = 6
    } else if (cIndex === 1) {
      // ----- This note is the root of the chord -------
      ringColorIndex = 2
      fillColorIndex = 2
      textColorIndex = 2
    } else {
      // ----- This note is in the chord but not the root-------
      ringColorIndex = 6
      fillColorIndex = 1
      textColorIndex = 1
    }
  } else if (kIndex === 4) {
    // ==== This note is the fourth of the key ======
    if (cIndex < 0) {
      // ----- No chord is set -------
      ringColorIndex = 3
      fillColorIndex = 3
      textColorIndex = 1
    } else if (cIndex === 0) {
      // ----- This note is not in the chord -------
      ringColorIndex = 7
    } else if (cIndex === 1) {
      // ----- This note is the root of the chord -------
      ringColorIndex = 7
      fillColorIndex = 2
      textColorIndex = 2
    } else {
      // ----- This note is in the chord but not the root ------
      ringColorIndex = 7
      fillColorIndex = 1
      textColorIndex = 1
    }
  } else if (kIndex === 5) {
    // ==== This note is the fifth of the key ======
    if (cIndex < 0) {
      // ----- No chord is set -------
      ringColorIndex = 4
      fillColorIndex = 3
      textColorIndex = 1
    } else if (cIndex === 0) {
      // ----- This note is not in the chord -------
      ringColorIndex = 8
    } else if (cIndex === 1) {
      // ----- This note is the root of the chord -------
      ringColorIndex = 8
      fillColorIndex = 2
      textColorIndex = 2
    } else {
      // ----- This note is in the chord but not the root-------
      ringColorIndex = 8
      fillColorIndex = 1
      textColorIndex = 1
    }
  } else {
    // ==== This note is in the key but not special ======
    if (cIndex < 0) {
      // ----- No chord is set -------
      ringColorIndex = 5
      fillColorIndex = 3
      textColorIndex = 1
    } else if (cIndex === 0) {
      // ----- This note is not in the chord -------
    } else if (cIndex === 1) {
      // ----- This note is the root of the chord -------
      ringColorIndex = 9
      fillColorIndex = 2
      textColorIndex = 2
    } else {
      // ----- This note is in the chord but not the root-------
      ringColorIndex = 9
      fillColorIndex = 1
      textColorIndex = 1
    }
  }

  return { ringColorIndex, fillColorIndex, textColorIndex }
}

export default FretboardNote
