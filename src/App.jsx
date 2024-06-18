import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/defaultTheme'
import { Routes } from './routes'
import { AuthProvider } from './contexts/auth-context'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}
