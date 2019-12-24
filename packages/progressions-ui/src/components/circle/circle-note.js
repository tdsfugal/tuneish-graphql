import React from "react"

import CircleNoteArc from "./circle-note-arc"

import { toneMap, circleMap } from "../../theory/circle-map"

export default ({ i, r_outer, r_inner, music_key }) => {
  return <CircleNoteArc i={i} r_outer={r_outer} r_inner={r_inner} tone={"Ab"} />
}
