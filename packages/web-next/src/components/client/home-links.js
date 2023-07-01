"use client";

import { useReactiveVar } from "@apollo/client";

import { HOME_MANIFEST } from "src/state/reactive";

import { HomeLinksView } from "src/styles/server";

import HomeLinksItem from "./home-links-item";

const HomeLinks = () => {
  const manifest = useReactiveVar(HOME_MANIFEST);

  return (
    <HomeLinksView className="HomeLinks">
      {manifest.map(({ _id, label }) => (
        <HomeLinksItem key={_id} _id={_id} label={label} />
      ))}
    </HomeLinksView>
  );
};

export default HomeLinks;
