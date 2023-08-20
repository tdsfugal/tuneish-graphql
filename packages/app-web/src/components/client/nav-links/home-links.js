"use client";

import { useRef } from "react";
import { useReactiveVar } from "@apollo/client";

import { HOME_MANIFEST, ACTIVE_SETUP_CARD } from "src/state/reactive";
import { getDimensionToken } from "src/design";

import { getLinkPos, lengthToPx } from "src/util";

import {
  NavLinksDynamicGroupView,
  NavLinksDynamicItemView,
} from "./nav-links-views";

import HomeLinksItem from "./home-links-item";

const STACK_HEIGHT =
  lengthToPx(getDimensionToken(["nav_links", "button_margin"])) * 2 +
  lengthToPx(getDimensionToken(["nav_links", "button_height"]));

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
        const { pos, type } = getLinkPos({
          yPos,
          nButtons: manifest.length,
          linksHeight,
        });
        if (type === "gap")
          ACTIVE_SETUP_CARD({
            yPos: pos * STACK_HEIGHT,
            _id: null,
            pos,
          });
      } else {
        // right click onto one of the Nav links. This makes yPos unreliable
        console.log("right mouse click on unknown link button");
      }
    }
  };

  return (
    <NavLinksDynamicGroupView
      className="HomeLinks"
      ref={(x) => (ref.current = x)}
      onMouseDown={handleMouseDown}
      onContextMenu={(e) => e.preventDefault()}
      values={manifest}
      onReorder={HOME_MANIFEST}
    >
      {manifest.map((item, index) => {
        return (
          <NavLinksDynamicItemView key={item._id} value={item}>
            <HomeLinksItem value={item} index={index} />
          </NavLinksDynamicItemView>
        );
      })}
    </NavLinksDynamicGroupView>
  );
};

export default HomeLinks;