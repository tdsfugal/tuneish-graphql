import React from "react"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"

import ArcView from "./arc-view"

import { TYPE_FILLS, DEGREE_STROKES } from "../_styles/params"

const SET_KEY_ROOT = gql`
  mutation SetKeyRoot($pitch: Int) {
    setKeyRoot(pitch: $pitch) @client
  }
`

const GET_NOTE = gql`
  query GetStableNote {
    stable_note @client {
      pitch
    }
  }
`

const GET_CHORD = gql`
  {
    current_chord @client {
      pitches
      intervals
    }
  }
`

// This higher order component handles the note metadata
const KeyArc = ({ pos, r_outer, r_inner, circle_note }) => {
  const [setKeyRoot] = useMutation(SET_KEY_ROOT)
  const { loading: sLoading, error: sError, data: sData } = useQuery(GET_NOTE)
  const { loading: cLoading, error: cError, data: cData } = useQuery(GET_CHORD)

  if (cError) return `Error! ${cError.message}`
  if (cLoading || !cData) return "Chord Loading..."

  const { name, pitch, degree } = circle_note

  const playing =
    !sLoading &&
    sError === undefined &&
    sData &&
    sData.stable_note &&
    sData.stable_note.pitch === pitch

  const chord =
    !cLoading && cError === undefined && cData && cData.current_chord
      ? cData.current_chord
      : { pitches: [], intervals: [] }

  const cInterval = chord.pitches.reduce((acc, p, index) => {
    if (pitch === p) acc = chord.intervals[index]
    return acc
  }, null)

  // generate the svg for the scale degree annotation, if any
  const chordInterval = !cInterval ? null : (
    <ArcView
      pos={pos}
      r_outer={r_outer * 1.45}
      r_inner={r_inner * 1.6}
      text={cInterval}
      shape_style={{
        fill: cInterval === "P1" ? TYPE_FILLS[degree.type] : "white",
        stroke: "black",
      }}
      text_style={{
        fontSize: 25,
        fontWeight: 700,
        fontFamily: "Georgia",
        fill: cInterval === "P1" ? "white" : "rebeccapurple",
      }}
    />
  )

  // generate the svg for the scale degree annotation, if any
  let scaleDegree = null
  let chordQual = null

  if (degree.type) {
    chordQual = (
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
    setKeyRoot({ variables: { pitch } })
  }

  return (
    <svg id={`key-arc-${name}`} onClick={handleKeyRootChange}>
      {chordInterval}
      {chordQual}
      {noteElement}
      {scaleDegree}
    </svg>
  )
}

export default KeyArc
