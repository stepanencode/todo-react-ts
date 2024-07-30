import { useState, useMemo, createContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import App from './App'

declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary']
  }

  interface PaletteOptions {
    ochre?: PaletteOptions['primary']
  }
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

export default function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ochre: {
            main: mode === 'light' ? '#E9DB5D' : '#A29415',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
          },
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
