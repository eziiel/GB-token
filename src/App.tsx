// import { Access } from "./pages/access"
import { SelectPlan } from "./assets/SelectPlan/selectPlan"
import { Client } from "./pages/client"
import { Global } from "./styles/global"
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./router"
import { AuthProvider } from "./context/autContext"


function App() {

  return (
    <>
      <Global />
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      <Client />
    </>
  )
}

export default App
