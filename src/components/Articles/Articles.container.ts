import { connect } from "react-redux"

import { getItems } from "store/entities/bundle"
import { TAppState } from "store/entities"

import { Articles } from "./Articles"

export interface IStateProps extends ReturnType<typeof getItems> {}

export default connect<IStateProps, {}, {}, TAppState>(state => getItems(state))(Articles)
