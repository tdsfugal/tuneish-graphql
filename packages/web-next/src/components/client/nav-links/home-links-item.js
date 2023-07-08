"use client";

import { useRef } from "react";

import { SCROLL_TO, ACTIVE_SETUP_CARD } from "src/state/reactive";

import { NavLinksButtonView, NavLinksTextView } from "./nav-links-views";

const HomeLinksItem = ({ index, value: { _id, label } }) => {
  const ref = useRef(null);

  const handleClick = (e) => {
    // do not prevent default; the links container has event handlers too
    console.log("Scroll to ", _id);
    SCROLL_TO(_id);
  };

  const handleMouseDown = (e) => {
    if (e.button == 2) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Right Mouse click ", _id, index + 1);
      ACTIVE_SETUP_CARD({ yPos: ref.current.offsetTop, _id, pos: index + 1 });
    }
  };

  return (
    <NavLinksButtonView
      className="HomeLinksItem"
      ref={(x) => (ref.current = x)}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      <NavLinksTextView>{label}</NavLinksTextView>
    </NavLinksButtonView>
  );
};

export default HomeLinksItem;
