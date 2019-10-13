import { takeLatest, call, put } from "redux-saga/effects"
import { AxiosResponse } from "axios"

import { IState as IInfoState } from "./reducers/info"
import { IState as IItemsState } from "./reducers/items"
import { BundleInfoTypes, BundleItemsTypes } from "./types"
import { BundleInfoActions, BundleItemsActions } from "./actions"
import * as api from "./api"

export function* handleGetInfo() {
  try {
    const { data }: AxiosResponse<Required<IInfoState>["data"]> = yield call(api.getInfo)
    yield put(BundleInfoActions.success(data))
  } catch (e) {
    yield put(BundleInfoActions.failure())
  }
}

export function* handleGetItems() {
  try {
    // const pagination: ReturnType<typeof getPagination> = yield select(getPagination)
    const { data }: AxiosResponse<IItemsState["data"]> = yield call(api.getItems)
    // yield put(ReviewsPaginationActions.setTotal(Number(headers["x-total-count"])))
    yield put(BundleItemsActions.success(data))
  } catch (e) {
    yield put(BundleItemsActions.failure())
  }
}

export default function*() {
  yield takeLatest(BundleInfoTypes.REQUEST, handleGetInfo)
  yield takeLatest(BundleItemsTypes.REQUEST, handleGetItems)
}
