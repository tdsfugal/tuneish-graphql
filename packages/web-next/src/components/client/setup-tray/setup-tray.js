"use client";

import { useState, useEffect } from "react";

import { useReactiveVar } from "@apollo/client";

import { ACTIVE_SETUP_CARD } from "src/state/reactive";

import { SetupTrayView } from "./setup-tray-views";

import SetupCard from "./setup-card";

const SetupTray = () => {
  const [active, setActive] = useState(false);
  const [cardElement, setCardElement] = useState(null);
  const card = useReactiveVar(ACTIVE_SETUP_CARD);

  useEffect(() => {
    if (card) {
      setActive(true);
      setCardElement(<SetupCard card={card} />);
    } else {
      setActive(false);
      setCardElement(null);
    }
  }, [setActive, setCardElement, card]);

  return (
    <SetupTrayView className="SetupTray" active={active}>
      {cardElement}
    </SetupTrayView>
  );
};

export default SetupTray;
