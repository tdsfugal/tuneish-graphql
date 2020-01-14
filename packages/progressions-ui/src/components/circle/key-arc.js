import React from "react"

import ArcView from "./arc-view"

const TYPE_FILLS = {
  Maj: "purple",
  Min: "orange",
  Dim: "green",
}

const DEGREE_STROKES = {
  I: "red",
  i: "red",

  ii: "white",

  iii: "white",
  III: "white",

  IV: "blue",
  iv: "blue",

  V: "blue",
  v: "blue",

  vi: "white",
  VI: "white",

  vii: "white",
  VII: "white",
}

// This higher order component handles the note metadata
const KeyArc = ({ pos, r_outer, r_inner, circle_note }) => {
  const { name, degree } = circle_note

  const noteShapeStyle = {
    fill: degree.type ? "white" : "lightgray",
    stroke: "gray",
  }

  const noteTextStyle = {
    fontSize: 20,
    fontFamily: "Arial Black, sans-serif",
  }

  // generate the svg for the scale degree annotation, if any
  let scaleDegree = null
  let chordType = null

  if (degree.type) {
    chordType = (
      <ArcView
        pos={pos}
        r_outer={r_outer * 1.07}
        r_inner={r_outer}
        shape_style={{
          fill: TYPE_FILLS[degree.type],
        }}
      />
    )
    scaleDegree = (
      <ArcView
        pos={pos}
        r_outer={r_inner * 0.95}
        r_inner={r_inner * 0.65}
        text={degree.name}
        shape_style={{
          fill: "transparent",
        }}
        text_style={{
          fontSize: 18,
          fontFamily: "comic sans",
          fill: DEGREE_STROKES[degree.name],
        }}
      />
    )
  }

  return (
    <svg id={`key-arc-${name}`}>
      {chordType}
      <ArcView
        pos={pos}
        r_outer={r_outer}
        r_inner={r_inner}
        text={name}
        shape_style={noteShapeStyle}
        text_style={noteTextStyle}
      />
      {scaleDegree}
    </svg>
  )
}

export default KeyArc
