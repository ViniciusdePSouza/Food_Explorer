import React from 'react'
import ReactDOM from 'react-dom/client'

import { AddDish } from './pages/AddDish'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
      <AddDish />
    </ThemeProvider>
  </React.StrictMode>
)
