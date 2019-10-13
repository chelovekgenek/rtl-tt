import { connect } from "react-redux"
import { TAppState } from "store/entities"

import { getInfo } from "store/entities/bundle"

import { Header } from "./Header"

export interface IStateProps extends ReturnType<typeof getInfo> {}

export const HeaderContainer = connect<IStateProps, {}, {}, TAppState>(state => getInfo(state))(Header)
