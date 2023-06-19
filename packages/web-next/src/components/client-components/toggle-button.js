"use client";

import { useState } from "react";

import { ToggleButtonView } from "src/styles";

const ToggleButton = ({ onAction, onVisual, offAction, offVisual }) => {
  const [state, setState] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    state ? onAction() : offAction();
    setState(!state);
  };

  return (
    <ToggleButtonView onClick={handleClick}>
      {state ? onVisual : offVisual}
    </ToggleButtonView>
  );
};

export default ToggleButton;
