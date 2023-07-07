"use client";

import { useReactiveVar } from "@apollo/client";

import { ACTIVE_SETUP_CARD, HOME_MANIFEST } from "src/state/reactive";

import { SetupCardHeaderButtonView } from "./setup-tray-views";

const SetupCardAddButton = ({ pos, createItem, children }) => {
  const manifest = useReactiveVar(HOME_MANIFEST);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // create and add the iterm at the right position
    const item = createItem();
    // insert the new item at position pos without deleting any others, and update the value of
    // the reactive var. Note that the root pointer has to change for the reactive var to react
    // so regular splice doesn't work. The _id values need to be unique, otherwise there will be
    // key collisions in main and elsewhere.
    const newManifest = manifest.toSpliced(pos, 0, item);
    HOME_MANIFEST(newManifest);
    // close the card
    ACTIVE_SETUP_CARD(null);
  };

  return (
    <SetupCardHeaderButtonView
      className="SetupCardAddButton"
      onClick={handleAdd}
    >
      {children}
    </SetupCardHeaderButtonView>
  );
};

export default SetupCardAddButton;
