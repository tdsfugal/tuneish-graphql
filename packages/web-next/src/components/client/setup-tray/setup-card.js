"use client";

import { ACTIVE_SETUP_CARD } from "src/state/reactive";

import { SetupTrayCardView } from "./setup-tray-views";

const SetupTrayCard = ({ card }) => {
  const { yPos, _id } = card;

  const handleClick = (e) => {
    e.preventDefault();
    console.log("closing card for ", _id);
    ACTIVE_SETUP_CARD(null);
  };

  return (
    <SetupTrayCardView
      className="SetupTrayCard"
      yPos={yPos}
      onClick={handleClick}
    >
      {_id}
    </SetupTrayCardView>
  );
};

export default SetupTrayCard;
