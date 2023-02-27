import React from "react"
import { AuthContext } from "../../context/autContext"
import { HomeAccess, HomeForm } from "./styled"
import { useNavigate } from "react-router-dom";

export const Access = () => {
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { signIn } = React.useContext(AuthContext)

  const HandleSubmit = (event:React.FormEvent) => {
    event.preventDefault()
    const data = {
      login: login,
      password: password,
    }
    
   signIn(data)
  }


  return (
    <HomeAccess> 
      <HomeForm onSubmit={HandleSubmit}>  
        <h1>Acessar minha conta</h1>

        <input 
          type="text" 
          placeholder="CPF ou CNPJ" 
          onChange={e => setLogin(e.target.value)}
          value={login}
          />
        <input 
          type="password" 
          placeholder="SENHA" 
          onChange={e => setPassword(e.target.value)}
          value={password}/>

        <button type="submit"> Entrar </button>
      </HomeForm>
    </HomeAccess>
  )
}
