import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { HandView } from "../_styles"

const EXTRA_WIDTH = 20

const GET_FRETBOARD = gql`
  {
    fretboard @client {
      left_handed
      range_focus {
        active
        low
        high
      }
    }
  }
`

const FretboardRangeIndicator = ({ fretPositions }) => {
  const { loading, error, data } = useQuery(GET_FRETBOARD)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const {
    left_handed,
    range_focus: { active, low, high },
  } = data.fretboard

  if (active) {
    const xMin = left_handed ? fretPositions[high] : fretPositions[low]
    const xMax = left_handed ? fretPositions[low] : fretPositions[high]

    // condition is true for a moment every now and then because fretPositions
    // calc is sometimes out of sync with query results. Quick patch is to abort.
    if (xMin > xMax) return null
    // TODO - bring fretPositions into same cache as low/high/left_handeg

    return (
      <svg id="fretboard-range-indicator">
        <HandView xMin={xMin - EXTRA_WIDTH} xMax={xMax + EXTRA_WIDTH} />
      </svg>
    )
  }
  return null
}

export default FretboardRangeIndicator
