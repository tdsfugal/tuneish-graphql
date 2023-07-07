"use client";

import {
  SetupCardView,
  SetupCardHeaderView,
  SetupCardBodyView,
} from "./setup-tray-views";

import SetupCardAddButton from "./setup-card-add-button";
import SetupCardDeleteButton from "./setup-card-delete-button";

function generateShortId() {
  return Math.random().toString().substring(3, 10);
}

const SetupCard = ({ card }) => {
  const { yPos, _id, pos } = card;

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Click on setup card ", _id);
  };

  // STUB
  const createItem = () => {
    const id = generateShortId();
    const theNewThing = {
      _id: id,
      label: id,
    };
    return theNewThing;
  };

  return (
    <SetupCardView className="SetupCard" yPos={yPos} onClick={handleClick}>
      <SetupCardHeaderView className="SetupCardHeader">
        {_id ? (
          <SetupCardDeleteButton itemId={_id}>DELETE</SetupCardDeleteButton>
        ) : (
          <SetupCardAddButton pos={pos} createItem={createItem}>
            ADD
          </SetupCardAddButton>
        )}
      </SetupCardHeaderView>
      <SetupCardBodyView className="SetupCardBody">
        {_id ? `Item at manifest ${pos}` : `New item for manifest pos ${pos}`}
      </SetupCardBodyView>
    </SetupCardView>
  );
};

export default SetupCard;
