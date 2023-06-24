import React from "react";
import { SimpleBackgroundView } from "/src/styles/server";

const NavBackground = () => {
  return (
    <SimpleBackgroundView
      className="NavBackground"
      $colorToken={["core", "secondary"]}
    />
  );
};

export default NavBackground;
