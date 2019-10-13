import { takeLatest, call, put } from "redux-saga/effects"
import { AxiosResponse } from "axios"

import { BundleInfoTypes } from "./types"
import { BundleInfoActions } from "./actions"
import { IState as IItemsState } from "./reducers/info"
import * as api from "./api"

export function* handleGetInfo() {
  try {
    // const pagination: ReturnType<typeof getPagination> = yield select(getPagination)
    const { data }: AxiosResponse<Required<IItemsState>["data"]> = yield call(api.getInfo)
    // yield put(ReviewsPaginationActions.setTotal(Number(headers["x-total-count"])))
    yield put(BundleInfoActions.success(data))
  } catch (e) {
    yield put(BundleInfoActions.failure())
  }
}

export default function*() {
  yield takeLatest(BundleInfoTypes.REQUEST, handleGetInfo)
}
