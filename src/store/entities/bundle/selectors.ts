import { TAppState } from "../reducers"

export const getRoot = (state: TAppState) => state.bundle

export const getInfo = (state: TAppState) => state.bundle.info
export const getItems = (state: TAppState) => state.bundle.items
