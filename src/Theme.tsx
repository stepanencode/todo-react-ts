import { useState, useMemo, createContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { amber, yellow, grey } from '@mui/material/colors'
import App from './App'

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
          ...(mode === 'light'
            ? {
                primary: {
                  main: grey[900],
                  light: grey[100],
                  dark: grey[600],
                  contrastText: grey[100],
                },
                divider: grey[300],
                text: {
                  primary: grey[700],
                  secondary: grey[700],
                },
              }
            : {
                primary: {
                  main: grey[500],
                  light: yellow[100],
                  dark: amber[400],
                  contrastText: yellow[100],
                },
                divider: grey[700],
                background: {
                  default: grey[900],
                  paper: grey[900],
                },
                text: {
                  primary: yellow[100],
                  secondary: yellow[100],
                },
              }),
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
