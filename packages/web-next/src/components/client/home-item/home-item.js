"use client";

import { useRef, useEffect } from "react";
import { useReactiveVar } from "@apollo/client";

import { SCROLL_TO } from "src/state/reactive";
import { HomeItemView } from "src/styles/client";

const HomeItem = ({ _id }) => {
  const ref = useRef({ current: null });
  const scrollTo = useReactiveVar(SCROLL_TO);

  useEffect(() => {
    if (scrollTo === _id && ref) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
      SCROLL_TO("");
    }
  }, [_id, ref, scrollTo]);

  return (
    <HomeItemView key={_id} ref={ref}>
      <div
        style={{
          height: "500px",
          width: "600px",
          backgroundColor: "brown",
        }}
      >
        <h1>{_id}</h1>
      </div>
    </HomeItemView>
  );
};

export default HomeItem;
