import { combineReducers } from "redux"

import info from "./reducers/info"
import items from "./reducers/items"

export default combineReducers({
  info,
  items,
})
