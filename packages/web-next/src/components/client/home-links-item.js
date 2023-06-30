"use client";

import { HomeLinksItemView } from "src/styles/server";

const HomeLinksItem = ({ x }) => {
  return (
    <HomeLinksItemView className="HomeLinksItem">
      <p>{x}</p>
    </HomeLinksItemView>
  );
};

export default HomeLinksItem;
