import React from "react"
import { Provider } from "react-redux"

import * as Styles from "./App.styled"
import { store } from "store"

export const App = () => (
  <Provider store={store}>
    <Styles.Global />
    privet
  </Provider>
)
