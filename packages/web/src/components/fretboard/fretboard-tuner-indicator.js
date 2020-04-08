import React, { useReducer, useEffect } from "react"
import { tap, map } from "@most/core"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { FretboardTunerView } from "../_styles"
import { audioDistributor } from "../../streams"
import { NULL_NOTE } from "../../theory"

const GET_RANGE_FOCUS = gql`
  query GetRangeFocus {
    fretboard @client {
      range_focus {
        active
        low
        high
      }
    }
  }
`

const NULL_EVENT = {
  pitch: NULL_NOTE.pitch,
  oct: NULL_NOTE.oct,
  cents: [],
}

const MAX_CENTS = 10

const FretboardTunerIndicator = ({
  tuning,
  stringPositions,
  fretPositions,
}) => {
  // The state is accumulated from audioStream events.
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "STOP":
        return NULL_EVENT
      case "PLAY":
        const newState = {}
        if (action.pitch === state.pitch && action.oct === state.oct) {
          // Same note. Stack up the cents.
          state.cents.splice(0, 0, action.cent)
          while (state.cents.length > MAX_CENTS) state.cents.pop()
          newState.cents = state.cents
        } else {
          // New note
          newState.cents = []
        }
        newState.pitch = action.pitch
        newState.oct = action.oct
        return newState
      default:
        return state
    }
  }, NULL_EVENT)

  // A monadic stream dispatches actions to the reducer.
  useEffect(() => {
    audioDistributor.connect(audio$ => {
      // Convert to actions. Let the reducer handle the chatter.
      const action$ = map(({ pitch, oct, cent }) => {
        return pitch === NULL_NOTE.pitch
          ? { type: "STOP" }
          : { type: "PLAY", pitch, oct, cent }
      }, audio$)
      // Dispatch the action
      return tap(action => dispatch(action), action$)
    })
  }, [dispatch])

  // Get the range of frets to be covered
  const { loading, error, data } = useQuery(GET_RANGE_FOCUS)
  if (loading) return "Loading Range Focus..."
  if (error) return `Error! ${error.message}`

  // compute the location infos
  const { active, low, high } = data.fretboard.range_focus
  const min_fret = active ? low : 0
  const max_fret = active ? high : fretPositions.length - 1

  // Silence the component if there are no notes playing
  if (state === NULL_EVENT) return null

  // Draw the playing note and it's error bars
  return tuning.map(({ pitch, oct }, string) => {
    const deltaPitch = state.pitch - pitch
    const deltaOct = state.oct - oct
    const fret = deltaPitch + 12 * deltaOct
    if (fret < min_fret || fret > max_fret) return null
    return (
      <FretboardTunerView
        key={`str-${string}`}
        cents={state.cents}
        stringPosition={stringPositions[string]}
        fretPosition={fretPositions[fret]}
      />
    )
  })
}

export default FretboardTunerIndicator
