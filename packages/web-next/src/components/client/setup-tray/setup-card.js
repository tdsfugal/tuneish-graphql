"use client";

import { ACTIVE_SETUP_CARD } from "src/state/reactive";

import { SetupTrayCardView } from "./setup-tray-views";

const SetupTrayCard = ({ card }) => {
  const { yPos, _id, pos } = card;

  const handleClick = (e) => {
    e.preventDefault();
    ACTIVE_SETUP_CARD(null);
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
