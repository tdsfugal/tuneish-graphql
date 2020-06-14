import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { ChromaNoteView, ChromaRowView } from "../_styles"
import { TYPE_FILLS } from "../_styles/params"

const GET_NEXT_CHORD = gql`
  {
    next_chord @client {
      pitches
      quality
    }
  }
`

const ChromaRowNext = ({ chromaticNames }) => {
  const { loading, error, data } = useQuery(GET_NEXT_CHORD)

  if (error) return `Error! ${error.message}`
  if (loading || !data) return "Loading..."

  const { pitches, quality } = data.next_chord

  const notes = []
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 12; j++) {
      let color = null
      if (pitches.includes(j)) color = "lightgray"
      if (pitches[0] === j) color = TYPE_FILLS[quality] || "pink"
      notes.push(
        <ChromaNoteView key={`note-${i}-${j}`} color={color}>
          {color === null ? null : chromaticNames[j]}
        </ChromaNoteView>
      )
    }
  }

  return <ChromaRowView>{notes}</ChromaRowView>
}

export default ChromaRowNext
