import { action, payload } from "ts-action"

import { BundleInfoTypes, BundleItemsTypes, BundleItemsPaginationTypes } from "./types"
import { IState as IInfoState } from "./reducers/info"
import { IState as IItemsState } from "./reducers/items"

export const BundleInfoActions = {
  request: action(BundleInfoTypes.REQUEST),
  success: action(BundleInfoTypes.SUCCESS, payload<Required<IInfoState>["data"]>()),
  failure: action(BundleInfoTypes.FAILURE),
}

export const BundleItemsActions = {
  request: action(BundleItemsTypes.REQUEST),
  success: action(BundleItemsTypes.SUCCESS, payload<IItemsState["data"]>()),
  failure: action(BundleItemsTypes.FAILURE),
}

export const BundleItemsPaginationActions = {
  setPage: action(BundleItemsPaginationTypes.SET_PAGE),
  setTotal: action(BundleItemsPaginationTypes.SET_TOTAL),
}
