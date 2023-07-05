"use client";

import { FOOTER_DRAWER_OPEN } from "src/state/reactive";

import ToggleButton from "../toggle-button";

const FooterDrawerControl = ({ openVisual, closeVisual }) => {
  // Toggle button starts in off position
  return (
    <ToggleButton
      className="FoooterBarControl"
      offAction={() => FOOTER_DRAWER_OPEN(true)}
      offVisual={openVisual}
      onAction={() => FOOTER_DRAWER_OPEN(false)}
      onVisual={closeVisual}
    />
  );
};

export default FooterDrawerControl;
