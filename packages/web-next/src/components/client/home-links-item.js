"use client";

import { HomeLinksItemView } from "src/styles/server";

const HomeLinksItem = ({ label }) => {
  return (
    <HomeLinksItemView className="HomeLinksItem">
      <p>{label}</p>
    </HomeLinksItemView>
  );
};

export default HomeLinksItem;
