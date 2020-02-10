import { createStore as reduxCreateStore } from "redux"

import {
  UPDATE_FAST_NOTE,
  UPDATE_STABLE_NOTE,
  TOGGLE_FRETLESS,
  TOGGLE_LEFT_HANDED,
  TOGGLE_RANGE_FOCUS,
} from "./action-types"

import { randomKey } from "../../theory/keys"

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
    case TOGGLE_LEFT_HANDED:
      return Object.assign({}, state, {
        left_handed: action.left_handed,
      })
    case TOGGLE_RANGE_FOCUS:
      return Object.assign({}, state, {
        range_focus: action.range_focus,
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
  range_focus: false,
  hand_range: {
    low_fret: 2,
    high_fret: 6,
  },
}

const reduxStore = reduxCreateStore(reducer, initialState)

export default reduxStore
