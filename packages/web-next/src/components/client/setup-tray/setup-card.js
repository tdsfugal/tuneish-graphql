"use client";

import { SetupTrayCardView } from "./setup-tray-views";

const SetupTray = ({ card }) => {
  return (
    <SetupTrayCardView className="SetupTrayCard">{card}</SetupTrayCardView>
  );
};

export default SetupTray;
