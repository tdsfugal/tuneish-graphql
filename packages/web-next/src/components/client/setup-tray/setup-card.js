"use client";

import { useReactiveVar } from "@apollo/client";

import { ACTIVE_SETUP_CARD, HOME_MANIFEST } from "src/state/reactive";

import {
  SetupCardView,
  SetupCardHeaderView,
  SetupCardBodyView,
} from "./setup-tray-views";

import SetupCardDeleteButton from "./setup-card-delete-button";

const SetupCard = ({ card }) => {
  const manifest = useReactiveVar(HOME_MANIFEST);

  const { yPos, _id, pos } = card;

  const handleClick = (e) => {
    e.preventDefault();
    ACTIVE_SETUP_CARD(null);

    // insert the new item at position pos without deleting any others, and update the value of
    // the reactive var. Note that the root pointer has to change for the reactive var to react
    // so regular splice doesn't work. The _id values need to be unique, otherwise there will be
    // key collisions in main and elsewhere.
    const newManifest = manifest.toSpliced(pos, 0, {
      _id: Math.random().toString(),
      label: "new thing",
    });
    HOME_MANIFEST(newManifest);
  };

  return (
    <SetupCardView className="SetupCard" yPos={yPos} onClick={handleClick}>
      <SetupCardHeaderView className="SetupCardHeader">
        <SetupCardDeleteButton itemId={_id} />
      </SetupCardHeaderView>
      <SetupCardBodyView className="SetupCardBody">
        {_id ? `Item at manifest ${pos}` : `New item for manifest pos ${pos}`}
      </SetupCardBodyView>
    </SetupCardView>
  );
};

export default SetupCard;
