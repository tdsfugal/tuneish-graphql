import React from "react"

const thick = 0.3

export default ({ param }) => {
  const cx = param.center.x
  const cy = param.center.y
  const r_outer = param.r
  const r_inner = r_outer * (1 - thick)
  return (
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <circle cx={cx} cy={cy} r={r_outer} fill="#44aaff" />
      <circle cx={cx} cy={cy} r={r_inner} fill="white" />
    </svg>
  )
}
