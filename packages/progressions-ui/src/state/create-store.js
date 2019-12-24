import { createStore as reduxCreateStore } from "redux"
import { randomKey } from "../theory/keys"

const reducer = (state, action) => {
  return state
}

const initialState = { key: randomKey() }

export default () => reduxCreateStore(reducer, initialState)
