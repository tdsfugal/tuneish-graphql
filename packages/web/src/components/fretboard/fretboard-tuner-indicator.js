import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { FretboardTunerView } from "../_styles"

const GET_FRETBOARD_TUNER = gql`
  {
    fast_note @client {
      note
      cent
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

var cents = []
const MAX_CENTS = 10
var lastMidi = null

const FretboardTunerIndicator = ({
  tuning,
  stringPositions,
  fretPositions,
}) => {
  const { loading, error, data } = useQuery(GET_FRETBOARD_TUNER)
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const {
    fast_note: { note, cent },
    fretboard: {
      range_focus: { active, low, high },
    },
  } = data

  // Note - It isn't important to explicitly know if the tuner is on. Fast notes show up only
  //        when it is active.  A null indicator on the note value is sufficient.
  if (!note) {
    cents = []
    return null
  }

  // Update cents. Cents are deviations from perfect pitch for the note.  cent is in range (-50, +50)
  if (note.midi !== lastMidi) {
    lastMidi = note.midi
    cents = []
  }

  // Create a fanned look
  cents.push(cent)
  if (cents.length >= MAX_CENTS) cents.unshift()

  // compute the location infos
  const min_fret = active ? low : 0
  const max_fret = active ? high : fretPositions.length - 1

  // Go string by string and annotate the fretboard
  return tuning.map(({ tone, octave }, string) => {
    const deltaTone = note.tone - tone
    const deltaOct = note.oct - octave
    const fret = deltaTone + 12 * deltaOct
    if (fret < min_fret || fret > max_fret) return null
    return (
      <FretboardTunerView
        key={`str-${string}`}
        cents={cents}
        stringPosition={stringPositions[string]}
        fretPosition={fretPositions[fret]}
      />
    )
  })
}

export default FretboardTunerIndicator
