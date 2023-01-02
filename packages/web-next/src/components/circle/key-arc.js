import React from "react";
import { useReactiveVar } from "@apollo/client";

import { TYPE_FILLS, DEGREE_STROKES } from "/src/styles/params";
import { STABLE_NOTE, CURRENT_CHORD } from "/src/state/reactive";
import { setKeyRoot } from "/src/state/actions";

import ArcView from "./arc-view";

// This higher order component handles the note metadata
const KeyArc = ({ pos, r_outer, r_inner, circle_note }) => {
  const stableNote = useReactiveVar(STABLE_NOTE);
  const currentChord = useReactiveVar(CURRENT_CHORD);

  const { name, pitch, degree } = circle_note;

  const isPlaying = stableNote.pitch === pitch;

  const cInterval = currentChord.pitches.reduce((acc, p, index) => {
    if (pitch === p) acc = currentChord.intervals[index];
    return acc;
  }, null);

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
  );

  // generate the svg for the scale degree annotation, if any
  let scaleDegree = null;
  let chordQual = null;

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
    );

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
    );
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
        fill: isPlaying ? "red" : "black",
        stroke: isPlaying ? "yellow" : "transparent",
      }}
    />
  );

  const handleKeyRootChange = (e) => {
    e.preventDefault();
    setKeyRoot(pitch);
  };

  return (
    <svg id={`key-arc-${name}`} onClick={handleKeyRootChange}>
      {chordInterval}
      {chordQual}
      {noteElement}
      {scaleDegree}
    </svg>
  );
};

export default KeyArc;
