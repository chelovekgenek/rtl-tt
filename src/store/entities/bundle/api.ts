import { request } from "helpers"

import { IState as IInfoState } from "./reducers/items"
import { IState as IItemsState } from "./reducers/items"

export const getInfo = async () => request.get<IInfoState["data"]>(`/info`)
export const getItems = async () => request.get<IItemsState["data"]>(`/items`)
