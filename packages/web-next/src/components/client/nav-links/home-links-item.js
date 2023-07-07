"use client";

import { useRef } from "react";

import { SCROLL_TO, ACTIVE_SETUP_CARD } from "src/state/reactive";

import { NavLinksItemView, NavLinksTextView } from "./nav-links-views";

const HomeLinksItem = ({ _id, pos, label }) => {
  const ref = useRef(null);

  const handleClick = (e) => {
    // do not prevent default; the links container has event handlers too
    SCROLL_TO(_id);
  };

  const handleMouseDown = (e) => {
    if (e.button == 2) {
      e.preventDefault();
      e.stopPropagation();
      ACTIVE_SETUP_CARD({ yPos: ref.current.offsetTop, _id, pos });
    }
  };

  return (
    <NavLinksItemView
      className="HomeLinksItem"
      drag="y"
      ref={(x) => (ref.current = x)}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      <NavLinksTextView>{label}</NavLinksTextView>
    </NavLinksItemView>
  );
};

export default HomeLinksItem;
