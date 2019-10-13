import { reducer, on } from "ts-action"

import { BundleInfoActions } from "../actions"
import { IBundleInfo } from "../types"

export interface IState {
  fetching: boolean
  data?: IBundleInfo[]
}

export const initialState: IState = {
  fetching: false,
}

export default reducer(
  initialState,
  on(BundleInfoActions.request, state => ({
    ...state,
    fetching: true,
  })),
  on(BundleInfoActions.success, (state, { payload }) => ({
    ...state,
    fetching: false,
    data: payload,
  })),
  on(BundleInfoActions.failure, state => ({
    ...state,
    fetching: false,
  })),
)
