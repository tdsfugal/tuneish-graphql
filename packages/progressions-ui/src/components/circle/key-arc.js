import React from "react"

import ArcView from "./arc-view"

// const DEGREE_COLORS = {
//   Maj: "blue",
//   Min: "red",
//   Dim: "green",
// }

// This higher order component handles the note metadata
const KeyArc = ({ pos, r_outer, r_inner, circle_note }) => {
  const { name, degree } = circle_note
  return (
    <svg id={`key-arc-${name}`}>
      <ArcView
        pos={pos}
        r_outer={r_outer}
        r_inner={r_inner}
        text={name}
        fill={degree.type ? "#66AAEE" : "#EEAA66"}
        stroke={"gray"}
      />
      {!degree.type ? null : (
        <ArcView
          pos={pos}
          r_outer={r_inner}
          r_inner={r_inner * 0.7}
          text={degree.name}
          fill={"transparent"}
          stroke={"transparent"}
        />
      )}
    </svg>
  )
}

export default KeyArc
