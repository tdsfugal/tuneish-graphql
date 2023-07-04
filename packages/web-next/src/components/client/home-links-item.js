"use client";

import { NavLinksItemView, NavLinksTextView } from "src/styles/server";
import { SCROLL_TO } from "src/state/reactive";

const HomeLinksItem = ({ _id, label }) => {
  const handleClick = (e) => {
    // do not prevent default; the links container has event handlers too
    SCROLL_TO(_id);
  };

  const handleMouseDown = (e) => {
    if (e.button == 2) {
      e.preventDefault();
      e.stopPropagation();

      console.log("right mouse click on ", _id);
    }
  };

  return (
    <NavLinksItemView
      className="HomeLinksItem"
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      <NavLinksTextView>{label}</NavLinksTextView>
    </NavLinksItemView>
  );
};

export default HomeLinksItem;
