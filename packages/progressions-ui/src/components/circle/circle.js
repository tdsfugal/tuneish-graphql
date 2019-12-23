import React from "react"

import ARC from "./arc"

const THICK = 0.3
const ARCS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export default ({ cx, cy, r }) => {
  const r_outer = r
  const r_inner = r * (1 - THICK)
  function makeArc(i) {
    return <ARC i={i} cx={cx} cy={cy} r_outer={r_outer} r_inner={r_inner} />
  }
  return (
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx={cx}
        cy={cy}
        r={r_outer}
        fill="none"
        stroke="red"
        stroke-width="2"
      />
      <circle
        cx={cx}
        cy={cy}
        r={r_inner}
        fill="none"
        stroke="red"
        stroke-width="2"
      />
      {ARCS.map(i => makeArc(i))}
    </svg>
  )
}
