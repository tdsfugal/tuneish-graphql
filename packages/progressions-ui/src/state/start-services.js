import Tone from "tone"

import startUserInput from "./audio/input"

export default store => {
  // Start audio
  const stopUserInput = startUserInput(store)
  return store
}
