"use client";

import { HomeLinksView } from "src/styles/server";

import HomeLinksItem from "./home-links-item";

const HomeLinks = () => {
  return (
    <HomeLinksView className="HomeLinks">
      <HomeLinksItem x={"One"} />
      <HomeLinksItem x={"Two"} />
      <HomeLinksItem x={"Three"} />
    </HomeLinksView>
  );
};

export default HomeLinks;
