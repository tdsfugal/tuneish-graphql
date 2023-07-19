import React from "react";
import { useReactiveVar } from "@apollo/client";

import { CircleView } from "/src/styles";
import { CircleTheory } from "/src/theory";
import { CURRENT_KEY } from "/src/state/reactive";

import KeyArc from "./key-arc";
import MajMinSelector from "./maj-min-selector";

const MARGIN = 1.0;
const THICK = 0.3;
const ARCS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Circle = ({ r }) => {
  const currentKey = useReactiveVar(CURRENT_KEY);

  // Determine the notes and note names in the current key
  const circleTheory = new CircleTheory(currentKey);

  // Compute the geometry of the final component
  const box = r * (2 + MARGIN);
  const bCent = box / 2;
  const r_outer = r;
  const r_inner = r * (1 - THICK);

  // Render the component.
  return (
    <CircleView box={box}>
      <svg
        viewBox={`-${bCent} -${bCent} ${box} ${box}`}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {ARCS.map((pos) => {
          const circleNote = circleTheory.getNote(pos);
          return (
            <KeyArc
              key={`k${pos}`}
              pos={pos}
              r_outer={r_outer}
              r_inner={r_inner}
              circle_note={circleNote}
            />
          );
        })}
        <MajMinSelector />
      </svg>
    </CircleView>
  );
};

export default Circle;
