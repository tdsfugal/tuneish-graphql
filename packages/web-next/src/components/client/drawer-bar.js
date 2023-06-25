"use client";

import { useState } from "react";

import {
  DrawerBarView,
  DrawerBarButtonView,
  DrawerBarDrawerView,
} from "src/styles/server";

import ToggleButton from "./toggle-button";

const DrawerBar = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const close = <h1>CLOSE</h1>;
  const open = <h1>OPEN</h1>;

  const openDrawer = () => {
    console.log("open Drawer");
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    console.log("close Drawer");
    setDrawerOpen(false);
  };

  return (
    <DrawerBarView className="DrawerBarView">
      <DrawerBarButtonView className="DrawerBarButtonView">
        <ToggleButton
          className="DrawerToggleButton"
          onAction={openDrawer}
          onVisual={open}
          offAction={closeDrawer}
          offVisual={close}
        />
      </DrawerBarButtonView>
      {drawerOpen ? (
        <DrawerBarDrawerView className="DrawerBarDrawerView">
          {children}
        </DrawerBarDrawerView>
      ) : null}
    </DrawerBarView>
  );
};

export default DrawerBar;
