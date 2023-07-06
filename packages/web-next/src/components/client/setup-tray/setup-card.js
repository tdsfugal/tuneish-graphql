"use client";

import { useReactiveVar } from "@apollo/client";

import { ACTIVE_SETUP_CARD, HOME_MANIFEST } from "src/state/reactive";

import { SetupTrayCardView } from "./setup-tray-views";

const SetupTrayCard = ({ card }) => {
  const manifest = useReactiveVar(HOME_MANIFEST);

  const { yPos, _id, pos } = card;

  const handleClick = (e) => {
    e.preventDefault();
    ACTIVE_SETUP_CARD(null);

    // insert the new item at position pos without deleting any others, and update the value of
    // the reactive var. Note that the root pointer has to change for the reactive var to react
    // so regular splice doesn't work.

    // The _id values need to be unique, otherwise key collisions in main and elsewhere.
    HOME_MANIFEST(
      manifest.toSpliced(pos, 0, {
        _id: Math.random().toString(),
        label: "new thing",
      })
    );
  };

  return (
    <SetupTrayCardView
      className="SetupTrayCard"
      yPos={yPos}
      onClick={handleClick}
    >
      {_id ? `Item at manifest ${pos}` : `New item for manifest pos ${pos}`}
    </SetupTrayCardView>
  );
};

export default SetupTrayCard;
