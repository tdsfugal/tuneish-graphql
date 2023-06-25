"use client";

import { useState } from "react";

import ToggleButton from "./toggle-button";

const FooterDrawerControl = ({ openVisual, closeVisual }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    console.log("open Footer Drawer");
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    console.log("close Footer Drawer");
    setDrawerOpen(false);
  };

  // Toggle button starts in off position
  return (
    <ToggleButton
      offAction={openDrawer}
      offVisual={openVisual}
      onAction={closeDrawer}
      onVisual={closeVisual}
    />
  );
};

export default FooterDrawerControl;
