import React from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"

import { Header } from "components/Header"
import { store } from "store"

import * as Styles from "./App.styled"
import theme from "./App.theme"
import { Articles } from "components/Articles"

export const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Styles.Global />
      <Styles.Layout>
        <Header />
        <Articles />
      </Styles.Layout>
    </Provider>
  </ThemeProvider>
)
