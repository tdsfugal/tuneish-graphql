import React from "react"

import CircleNote from "./circle-note"

const MARGIN = 0.5
const THICK = 0.3
const NOTES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export default ({ r }) => {
  const box = r * (2 + MARGIN)
  const bCent = box / 2
  const r_outer = r
  const r_inner = r * (1 - THICK)
  return (
    <svg
      viewBox={`-${bCent} -${bCent} ${box} ${box}`}
      width={`${box}px`}
      height={`${box}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {NOTES.map(i => {
        return (
          <CircleNote
            key={`${i}-key`}
            i={i}
            r_outer={r_outer}
            r_inner={r_inner}
            music_key={music_key}
          />
        )
      })}
    </svg>
  )
}
