import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { templates, themes } from '../core'
import store from '../store'

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={themes.defaultTheme}>
            <templates.GlobalStyle />
            <Component { ...pageProps } />
          </ThemeProvider>
        </Provider>
      </>
    )
  }
}

export default MyApp