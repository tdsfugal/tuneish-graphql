"use client";

import { useReactiveVar } from "@apollo/client";

import { HOME_MANIFEST } from "src/state/reactive";

import { HomeLinksView } from "src/styles/server";

import HomeLinksItem from "./home-links-item";

const HomeLinks = () => {
  const manifest = useReactiveVar(HOME_MANIFEST);

  const handleMouseDown = (e) => {
    console.log(e);
    const en = e.nativeEvent;
    if (en.buttons == 2) {
      // secondary mouse button pressed, e.g. right click
      console.log("right mouse click, y offset = ", en.offsetY);
    }
  };

  return (
    <HomeLinksView className="HomeLinks" onMouseDown={handleMouseDown}>
      {manifest.map(({ _id, label }) => (
        <HomeLinksItem key={_id} _id={_id} label={label} />
      ))}
    </HomeLinksView>
  );
};

export default HomeLinks;
