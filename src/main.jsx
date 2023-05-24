// react
import React from 'react'
import ReactDOM from 'react-dom/client'
// router-dom
import { BrowserRouter } from 'react-router-dom'
// app
import { App } from './App'
// themes
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles/theme'
// global styles
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle /> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
