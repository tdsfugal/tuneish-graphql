import { Keys } from "/src/theory";

import { CURRENT_KEY } from "../reactive";

export default function setKeyRoot(pitch) {
  const { name, type } = CURRENT_KEY();
  const keys = Keys.getKeys({ pitch, type });
  // Find out if the user is clicking on a different key, or one with
  // enharmonic alternatives. Eitehr way, find out if there is an other.
  let ind;
  for (ind = 0; ind < keys.length && name === keys[ind].name; ind++) {}
  // If there is another key use it as the new current_key
  if (ind < keys.length) {
    CURRENT_KEY({ ...keys[ind] });
  }
}
