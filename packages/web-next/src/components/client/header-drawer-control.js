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

  return (
    <ToggleButton
      className="ToggleButton"
      onAction={openDrawer}
      onVisual={openVisual}
      offAction={closeDrawer}
      offVisual={closeVisual}
    />
  );
};

export default HeaderDrawerControl;
