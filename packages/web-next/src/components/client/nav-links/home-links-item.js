"use client";

import { useRef, useState } from "react";
import { useReactiveVar } from "@apollo/client";

import {
  SCROLL_TO,
  ACTIVE_SETUP_CARD,
  HOME_MANIFEST,
} from "src/state/reactive";

import { NavLinksItemView, NavLinksTextView } from "./nav-links-views";

function computePos(start, end, manifest) {
  console.log(end, start);
  console.log(manifest);
  return end - start;
}

const HomeLinksItem = ({ _id, pos, label }) => {
  const [start, setStart] = useState(0);
  const manifest = useReactiveVar(HOME_MANIFEST);
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

  const handleDragStart = (e, info) => {
    e.preventDefault();
    console.log("drag start");
    console.log(info.point.y, info.offset.y);
    setStart(info.point.y);
  };

  const handleDragEnd = (e, info) => {
    e.preventDefault();
    console.log("drag end");
    console.log(info.point.y, info.offset.y);
    const newPos = computePos(start, info.point.y, manifest);
    console.log(newPos);
    const newManifest = manifest.slice();
    HOME_MANIFEST(newManifest);
  };

  return (
    <NavLinksItemView
      className="HomeLinksItem"
      drag="y"
      whileDrag={{ scale: 1.1 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      ref={(x) => (ref.current = x)}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      <NavLinksTextView>{label}</NavLinksTextView>
    </NavLinksItemView>
  );
};

export default HomeLinksItem;
