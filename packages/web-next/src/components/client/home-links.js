"use client";

import { useReactiveVar } from "@apollo/client";

import { HOME_MANIFEST } from "src/state/reactive";

import { HomeLinksView } from "src/styles/server";

import HomeLinksItem from "./home-links-item";

const HomeLinks = () => {
  const manifest = useReactiveVar(HOME_MANIFEST);
  const items = manifest.map(({ label }) => {
    return <HomeLinksItem label={label} />;
  });

  return <HomeLinksView className="HomeLinks">{items} </HomeLinksView>;
};

export default HomeLinks;
