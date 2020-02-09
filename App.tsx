import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { StyleProvider } from 'native-base'

import getTheme from './native-base-theme/components'
import commonColor from './native-base-theme/variables/commonColor'

import { theme } from './src/theme'
import { Home } from './src/pages'

export default function App() {
  return (
    <StyleProvider style={getTheme(commonColor)}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </StyleProvider>
  )
}
