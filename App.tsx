import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { theme } from './src/theme'
import { Home } from './src/pages'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}
