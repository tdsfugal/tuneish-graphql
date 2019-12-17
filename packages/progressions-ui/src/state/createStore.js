import { createStore as reduxCreateStore } from "redux"
import { randomKey } from "../theory/keys"

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const initialState = { key: randomKey() }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
