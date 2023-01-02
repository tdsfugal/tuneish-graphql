import React from "react";
import { useReactiveVar } from "@apollo/client";

import { CURRENT_KEY } from "/src/state/reactive";

import { toggleKeyType } from "/src/state/actions";

const MajMinSelector = () => {
  const currentKey = useReactiveVar(CURRENT_KEY);

  const text = currentKey.type === "Major" ? "M" : "m";

  const handleClick = (e) => {
    e.preventDefault();
    toggleKeyType();
  };

  return (
    <svg style={{ fontSize: "30px" }} onClick={handleClick}>
      <circle cx="0" cy="0" r="40" fill="rebeccapurple" />
      <text x="-13" y="10" stroke="#fff" fill="#eee">
        {text}
      </text>
    </svg>
  );
};

export default MajMinSelector;
