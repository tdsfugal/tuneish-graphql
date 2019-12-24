import React from "react"

import ARC from "./arc"

const THICK = 0.3
const ARCS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export default ({ r }) => {
  const r_outer = r
  const r_inner = r * (1 - THICK)
  function makeArc(i) {
    return <ARC i={i} r_outer={r_outer} r_inner={r_inner} />
  }
  return (
    <svg
      viewBox="-200 -200 400 400"
      width="400px"
      height="400px"
      xmlns="http://www.w3.org/2000/svg"
    >
      {ARCS.map(i => makeArc(i))}
    </svg>
  )
}
