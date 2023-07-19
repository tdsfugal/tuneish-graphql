"use client";

import React from "react";

import { useReactiveVar } from "@apollo/client";

import { HomeScrollView } from "./home-scroll-views";
import { HOME_MANIFEST } from "src/state/reactive";

import HomeItem from "src/components/client/home-item";

const HomeScroll = () => {
  const manifest = useReactiveVar(HOME_MANIFEST);

  return (
    <HomeScrollView className="HomeScroll">
      {manifest.map(({ _id }) => (
        <HomeItem key={_id} _id={_id} />
      ))}
    </HomeScrollView>
  );
};

export default HomeScroll;
