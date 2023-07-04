"use client";

import { useRef } from "react";
import { useReactiveVar } from "@apollo/client";

import { HOME_MANIFEST } from "src/state/reactive";
import { NavLinksView } from "src/styles/server";
import getLinkPos from "src/util/get-link-pos";

import HomeLinksItem from "./home-links-item";

const HomeLinks = () => {
  const ref = useRef(null);
  const manifest = useReactiveVar(HOME_MANIFEST);

  const handleMouseDown = (e) => {
    if (e.button == 2) {
      e.preventDefault();

      const linksHeight = ref.current ? Number(ref.current.clientHeight) : 100;
      // secondary mouse button pressed, e.g. right click
      if (e.target.className.match(/HomeLinks/)) {
        // right click onto container "HomeLinks"
        const yPos = e.nativeEvent.offsetY;
        // type can be ignored because this is always in the gap
        //TOOD - edge case - click left or right of the button)
        const { pos } = getLinkPos({
          yPos,
          nButtons: manifest.length,
          linksHeight,
        });
        console.log("links position = ", pos);
      } else {
        // right click onto one of the Nav links. This makes yPos unreliable
        console.log("right mouse click on unknown link button");
      }
    }
  };

  return (
    <NavLinksView
      className="HomeLinks"
      ref={(x) => (ref.current = x)}
      onMouseDown={handleMouseDown}
      onContextMenu={(e) => e.preventDefault()}
    >
      {manifest.map(({ _id, label }) => (
        <HomeLinksItem key={_id} _id={_id} label={label} />
      ))}
    </NavLinksView>
  );
};

export default HomeLinks;
