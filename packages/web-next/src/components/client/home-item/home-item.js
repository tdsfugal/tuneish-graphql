"use client";

import { HomeItemView } from "src/styles/client";

const HomeItem = ({ itemId }) => {
  return (
    <HomeItemView key={itemId}>
      <div
        style={{
          height: "500px",
          width: "300px",
          backgroundColor: "brown",
        }}
      >
        <h1>{itemId}</h1>
      </div>
    </HomeItemView>
  );
};

export default HomeItem;
