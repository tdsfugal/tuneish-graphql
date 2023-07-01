import React from "react";
import { useReactiveVar } from "@apollo/client";

import { HomeView } from "/src/styles/server";
import { HOME_MANIFEST, SCROLL_TO } from "src/state/reactive";

import HomeItem from "src/components/client/home-item";

const HomeScroll = () => {
  const manifest = useReactiveVar(HOME_MANIFEST);
  const scrollTo = useReactiveVar(SCROLL_TO);

  console.log("Scroll to ", scrollTo);

  return (
    <HomeView className="HomeScroll">
      {manifest.map(({ _id }) => (
        <HomeItem key={_id} _id={_id} />
      ))}
    </HomeView>
  );
};

export default HomeScroll;
