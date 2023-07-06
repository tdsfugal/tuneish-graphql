"use client";

import { SetupTrayCardView } from "./setup-tray-views";

const SetupTray = ({ card }) => {
  const { yPos, type } = card;

  return (
    <SetupTrayCardView className="SetupTrayCard" yPos={yPos}>
      {type}
    </SetupTrayCardView>
  );
};

export default SetupTray;
