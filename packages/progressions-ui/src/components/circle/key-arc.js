import React from "react"

import ArcView from "./arc-view"

const DEGREE_FILLS = {
  Maj: "lightblue",
  Min: "lightpink",
  Dim: "lightgreen",
}

const DEGREE_STROKES = {
  I: "red",
  i: "red",

  ii: "transparent",

  iii: "transparent",
  III: "transparent",

  IV: "blue",
  iv: "blue",

  V: "blue",
  v: "blue",

  vi: "transparent",
  VI: "transparent",

  vii: "transparent",
  VII: "transparent",
}

// This higher order component handles the note metadata
const KeyArc = ({ pos, r_outer, r_inner, circle_note }) => {
  const { name, degree } = circle_note

  // generate the svg for the scale degree annotation, if any
  let scaleDegree = null
  if (degree.type) {
    const degreeFill = DEGREE_FILLS[degree.type]
    const degreeStroke = DEGREE_STROKES[degree.name]

    scaleDegree = (
      <ArcView
        pos={pos}
        r_outer={r_inner}
        r_inner={r_inner * 0.7}
        text={degree.name}
        fill={degreeFill}
        stroke={degreeStroke}
      />
    )
  }

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
      {scaleDegree}
    </svg>
  )
}

export default KeyArc
