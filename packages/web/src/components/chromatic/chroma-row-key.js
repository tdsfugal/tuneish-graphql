import React from "react"

import { ChromaNoteView, ChromaRowView } from "../_styles"

const ChromaRowKey = ({ pitches, chromaticNames }) => {
  const notes = []
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 12; j++) {
      let color = "transparent"
      if (pitches[0] === j) color = "pink"
      if (pitches[1] === j) color = "lightgray"
      if (pitches[2] === j) color = "lightgray"
      if (pitches[3] === j) color = "lightblue"
      if (pitches[4] === j) color = "lightblue"
      if (pitches[5] === j) color = "lightgray"
      if (pitches[6] === j) color = "lightgray"
      notes.push(
        <ChromaNoteView key={`note-${i}-${j}`} color={color}>
          {color === "transparent" ? null : chromaticNames[j]}
        </ChromaNoteView>
      )
    }
  }

  return <ChromaRowView>{notes}</ChromaRowView>
}

export default ChromaRowKey
