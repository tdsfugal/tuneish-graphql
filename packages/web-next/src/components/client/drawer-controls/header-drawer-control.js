"use client";

import { HEADER_DRAWER_OPEN } from "src/state/reactive";

import ToggleButton from "../toggle-button";

const HeaderDrawerControl = ({ openVisual, closeVisual }) => {
  // Toggle button starts in off position
  return (
    <ToggleButton
      className="HeaderBarControl"
      offAction={() => HEADER_DRAWER_OPEN(true)}
      offVisual={openVisual}
      onAction={() => HEADER_DRAWER_OPEN(false)}
      onVisual={closeVisual}
    />
  );
};

export default HeaderDrawerControl;
