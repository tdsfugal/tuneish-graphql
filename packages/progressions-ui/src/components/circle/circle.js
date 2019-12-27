import React from "react"
import { connect } from "react-redux"

import KeyArc from "./key-arc"

import CircleTheory from "../../theory/circle-theory"

const MARGIN = 0.5
const THICK = 0.3
const ARCS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const Circle = ({ r, current_key }) => {
  const box = r * (2 + MARGIN)
  const bCent = box / 2
  const r_outer = r
  const r_inner = r * (1 - THICK)
  const theory = new CircleTheory(current_key)
  return (
    <svg
      viewBox={`-${bCent} -${bCent} ${box} ${box}`}
      width={`${box}px`}
      height={`${box}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {ARCS.map(pos => {
        return (
          <KeyArc
            key={`k${pos}`}
            pos={pos}
            r_outer={r_outer}
            r_inner={r_inner}
            theory={theory}
          />
        )
      })}
    </svg>
  )
}

const mapStateToProps = ({ key }) => {
  return { current_key: key }
}

export default connect(mapStateToProps)(Circle)
