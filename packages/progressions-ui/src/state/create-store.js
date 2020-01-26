import { createStore as reduxCreateStore } from "redux"

import {
  UPDATE_FAST_NOTE,
  UPDATE_STABLE_NOTE,
  TOGGLE_FRETLESS,
  TOGGLE_HAND_INDICATOR,
} from "./action-types"

import { randomKey } from "../theory/keys"

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FAST_NOTE:
      return Object.assign({}, state, {
        fast_note: {
          freq: action.freq,
          note: action.note,
          cent: action.cent,
        },
      })
    case UPDATE_STABLE_NOTE:
      return Object.assign({}, state, {
        stable_note: {
          note: action.note,
        },
      })
    case TOGGLE_FRETLESS:
      return Object.assign({}, state, {
        fretless: action.fretless,
      })
    case TOGGLE_HAND_INDICATOR:
      return Object.assign({}, state, {
        hand_indicator: action.hand_indicator,
      })
    default:
      return state
  }
}

const initialState = {
  current_key: randomKey(),
  // These values are the note that is ringing out. Slowly varying.
  stable_note: {
    note: null,
  },
  // These values vary at near animationframerate speed
  fast_note: {
    freq: 0,
    note: null,
    cent: 0.0,
  },
  fretless: false,
  left_handed: false,
  hand_indicator: true,
  hand_range: {
    low_fret: 1,
    high_fret: 5,
  },
}

export default () => reduxCreateStore(reducer, initialState)
