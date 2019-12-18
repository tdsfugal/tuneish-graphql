import React from "react"

export default () => {
  const cx = 200
  const cy = 200
  const r = 160
  const thick = 0.3
  return (
    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <circle cx={cx} cy={cy} r={r} fill="#44aaff" />
      <circle cx={cx} cy={cy} r={r * (1 - thick)} fill="white" />
    </svg>
  )
}
