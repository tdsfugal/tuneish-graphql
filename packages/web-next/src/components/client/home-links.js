"use client";

import { useReactiveVar } from "@apollo/client";

import { HOME_MANIFEST } from "src/state/reactive";
import { NavLinksView } from "src/styles/server";
import computeManifestPosition from "src/util/compute-manifest-position";

import HomeLinksItem from "./home-links-item";

const HomeLinks = () => {
  const manifest = useReactiveVar(HOME_MANIFEST);

  const handleMouseDown = (e) => {
    if (e.button == 2) {
      e.preventDefault();
      // secondary mouse button pressed, e.g. right click
      if (e.target.className.match(/HomeLinks/)) {
        // right click onto container "HomeLinks"
        const yPos = e.nativeEvent.offsetY;
        const mPos = computeManifestPosition(yPos);
        console.log("manifest position = ", mPos);
      } else {
        // right click onto one of the Nav links
        console.log("right mouse click on link");
      }
    }
  };

  return (
    <NavLinksView
      className="HomeLinks"
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
