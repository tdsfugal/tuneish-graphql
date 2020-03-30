import React from "react"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"

import ArcView from "./arc-view"

import { TYPE_FILLS, DEGREE_STROKES } from "./params"

const SET_KEY_ROOT = gql`
  mutation SetKeyRoot($tone: Int) {
    setKeyRoot(tone: $tone) @client
  }
`

const GET_STABLE_NOTE = gql`
  query GetStableNote {
    stable_note @client {
      tone
    }
  }
`

// This higher order component handles the note metadata
const KeyArc = ({ pos, r_outer, r_inner, circle_note }) => {
  const [setKeyRoot] = useMutation(SET_KEY_ROOT)
  const { loading, error, data } = useQuery(GET_STABLE_NOTE)

  const { name, tone, degree } = circle_note

  const playing =
    !loading &&
    error === undefined &&
    data &&
    data.stable_note &&
    data.stable_note.tone === tone

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
        fill: playing ? "red" : "black",
        stroke: playing ? "yellow" : "transparent",
      }}
    />
  )

  const handleKeyRootChange = e => {
    e.preventDefault()
    setKeyRoot({ variables: { tone } })
  }

  return (
    <svg id={`key-arc-${name}`} onClick={handleKeyRootChange}>
      {chordType}
      {noteElement}
      {scaleDegree}
    </svg>
  )
}

export default KeyArc
