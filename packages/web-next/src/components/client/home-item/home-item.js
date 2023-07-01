"use client";

import { useRef } from "react";

import { HomeItemView } from "src/styles/client";

const HomeItem = ({ _id }) => {
  const ref = useRef(null);

  console.log(ref);

  return (
    <HomeItemView key={_id} ref={ref}>
      <div
        style={{
          height: "500px",
          width: "300px",
          backgroundColor: "brown",
        }}
      >
        <h1>{_id}</h1>
      </div>
    </HomeItemView>
  );
};

export default HomeItem;
