import { all, fork } from "redux-saga/effects"

import bundle from "./bundle/saga"

export function* sagas() {
  yield all([fork(bundle)])
}
