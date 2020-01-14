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
          stroke: "transparent",
        }}
        text_style={{
          fontSize: 25,
          fontWeight: 700,
          fontFamily: "Georgia",
          fill: DEGREE_STROKES[degree.name],
        }}
      />
    )
  }

  const noteElement = (
    <ArcView
      pos={pos}
      r_outer={r_outer}
      r_inner={r_inner}
      text={name}
      shape_style={{
        fill: degree.type ? "white" : "#b6e5b6",
        stroke: "maroon",
        strokeWidth: 0.5,
      }}
      text_style={{
        fontSize: 25,
        fontFamily: "Arial Black",
      }}
    />
  )

  return (
    <svg id={`key-arc-${name}`}>
      {chordType}
      {noteElement}
      {scaleDegree}
    </svg>
  )
}

export default KeyArc
