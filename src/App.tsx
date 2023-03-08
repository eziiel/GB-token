import { Global } from "./styles/global"
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./router"
import { AuthProvider } from "./context/autContext"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/defaultTheme"

function App() {

  return (
    <>
      <Global />
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
