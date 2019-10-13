import { combineReducers } from "redux"

import bundle from "./bundle/reducer"

export const reducers = combineReducers({
  bundle,
})

export type TAppState = ReturnType<typeof reducers>
