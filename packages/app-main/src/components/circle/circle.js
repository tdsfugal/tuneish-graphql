import React from "react"
import { connect } from "react-redux"

import { CircleView } from "../_styles"

import KeyArc from "./key-arc"

import CircleTheory from "../../theory/circle-theory"

const MARGIN = 1.0
const THICK = 0.3
const ARCS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const Circle = ({ r, current_key }) => {
  // Determine the notes and note names in the current key
  const circleTheory = new CircleTheory(current_key)

  // Compute the geometry of the final component
  const box = r * (2 + MARGIN)
  const bCent = box / 2
  const r_outer = r
  const r_inner = r * (1 - THICK)

  // Render the component.
  return (
    <CircleView>
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

const mapStateToProps = ({ current_key }) => {
  return { current_key }
}

export default connect(mapStateToProps)(Circle)
