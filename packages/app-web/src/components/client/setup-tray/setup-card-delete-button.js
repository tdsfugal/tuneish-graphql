"use client";

import { useReactiveVar } from "@apollo/client";

import { ACTIVE_SETUP_CARD, HOME_MANIFEST } from "src/state/reactive";

import { SetupCardHeaderButtonView } from "./setup-tray-views";

const SetupCardDeleteButton = ({ itemId, children }) => {
  const manifest = useReactiveVar(HOME_MANIFEST);

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // update the manifest
    const newManifest = manifest.filter(({ _id }) => _id !== itemId);
    HOME_MANIFEST(newManifest);
    // close the card
    ACTIVE_SETUP_CARD(null);
  };

  return (
    <SetupCardHeaderButtonView
      className="SetupCardDeleteButton"
      onClick={handleDelete}
    >
      {children}
    </SetupCardHeaderButtonView>
  );
};

export default SetupCardDeleteButton;
