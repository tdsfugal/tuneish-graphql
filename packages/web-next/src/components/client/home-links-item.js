"use client";

import { NavLinksItemView } from "src/styles/server";
import { SCROLL_TO } from "src/state/reactive";

const HomeLinksItem = ({ _id, label }) => {
  const handleClick = (e) => {
    // do not prevent default; the links container has event handlers too
    SCROLL_TO(_id);
  };
  return (
    <NavLinksItemView className="HomeLinksItem" onClick={handleClick}>
      <p>{label}</p>
    </NavLinksItemView>
  );
};

export default HomeLinksItem;
