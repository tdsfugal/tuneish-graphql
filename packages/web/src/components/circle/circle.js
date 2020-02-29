import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { CircleView } from "../_styles"

import KeyArc from "./key-arc"

import CircleTheory from "../../theory/circle-theory"

const MARGIN = 1.0
const THICK = 0.3
const ARCS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const GET_CURRENT_KEY = gql`
  {
    current_key @client {
      name
      type
      acc
      tones
      notes
    }
  }
`

const Circle = ({ r }) => {
  const { loading, error, data } = useQuery(GET_CURRENT_KEY)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  // Determine the notes and note names in the current key
  const circleTheory = new CircleTheory(data.current_key)

  // Compute the geometry of the final component
  const box = r * (2 + MARGIN)
  const bCent = box / 2
  const r_outer = r
  const r_inner = r * (1 - THICK)

  // Render the component.
  return (
    <CircleView box={box}>
      <svg
        viewBox={`-${bCent} -${bCent} ${box} ${box}`}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {ARCS.map(pos => {
          const circleNote = circleTheory.getNote(pos)
          return (
            <KeyArc
              key={`k${pos}`}
              pos={pos}
              r_outer={r_outer}
              r_inner={r_inner}
              circle_note={circleNote}
            />
          )
        })}
      </svg>
    </CircleView>
  )
}

export default Circle