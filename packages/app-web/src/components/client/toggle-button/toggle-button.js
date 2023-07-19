"use client";

import { useState } from "react";

import { ToggleButtonView } from "./toggle-button-views";

const ToggleButton = ({ onAction, onVisual, offAction, offVisual }) => {
  const [state, setState] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    state ? onAction() : offAction();
    setState(!state);
  };

  return (
    <ToggleButtonView className="ToggleButton" onClick={handleClick}>
      {state ? onVisual : offVisual}
    </ToggleButtonView>
  );
};

export default ToggleButton;
