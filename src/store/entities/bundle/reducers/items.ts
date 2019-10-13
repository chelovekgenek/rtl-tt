import { reducer, on } from "ts-action"

import { BundleItemsActions } from "../actions"
import { IBundleItem, IBundlePagination } from "../types"

export interface IState {
  fetching: boolean
  data: IBundleItem[]
  pagination: IBundlePagination
}

export const initialState: IState = {
  fetching: false,
  data: [],
  pagination: {
    limit: 10,
    page: 0,
    total: 0,
  },
}

export default reducer(
  initialState,
  on(BundleItemsActions.request, state => ({
    ...state,
    fetching: true,
  })),
  on(BundleItemsActions.success, (state, { payload }) => ({
    ...state,
    fetching: false,
    data: payload,
  })),
  on(BundleItemsActions.failure, state => ({
    ...state,
    fetching: false,
  })),
)
