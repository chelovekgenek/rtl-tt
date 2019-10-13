import { expectSaga } from "redux-saga-test-plan"
import { call } from "redux-saga/effects"

import bundleInfo from "mocks/bundle-info.json"
import bundleItems from "mocks/bundle-items.json"

import bundleInfoReducer, { initialState as bundleInfoInitialState } from "./reducers/info"
import bundleItemsReducer, { initialState as bundleItemsInitialState } from "./reducers/items"
import * as api from "./api"
import { handleGetInfo, handleGetItems } from "./saga"

describe("bundle", () => {
  describe("handleGetInfo", () => {
    it("should mutate bundle info reducer", async () =>
      expectSaga(handleGetInfo)
        .withReducer(bundleInfoReducer)
        .provide([[call(api.getInfo), { data: bundleInfo }]])
        .hasFinalState({ ...bundleInfoInitialState, data: bundleInfo })
        .run())
  })
  describe("handleGetItems", () => {
    it("should mutate bundle items reducer", async () =>
      expectSaga(handleGetItems)
        .withReducer(bundleItemsReducer)
        .provide([[call(api.getInfo), { data: bundleInfo }]])
        .hasFinalState({ ...bundleItemsInitialState, data: bundleItems })
        .run())
  })
})
