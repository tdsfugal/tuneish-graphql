"use client";

import { useState } from "react";

import ToggleButton from "./toggle-button";

const HeaderDrawerControl = ({ openVisual, closeVisual }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    console.log("open Header Drawer");
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    console.log("close Header Drawer");
    setDrawerOpen(false);
  };

  // Toggle button starts in off position
  return (
    <ToggleButton
      className="HeaderBarControl"
      offAction={openDrawer}
      offVisual={openVisual}
      onAction={closeDrawer}
      onVisual={closeVisual}
    />
  );
};

export default HeaderDrawerControl;
