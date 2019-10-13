import { Store } from "redux"

import { BundleInfoActions, BundleItemsActions } from "./entities/bundle"

export const handleBoot = (store: Store) => {
  store.dispatch(BundleInfoActions.request())
  store.dispatch(BundleItemsActions.request())
}
