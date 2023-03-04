import React from "react"
import { AuthContext } from "../../context/autContext"
import { HomeAccess, HomeForm } from "./styled"
import { useNavigate } from "react-router-dom";
import { ErroLogin } from "../../components/erroLogin";
import { KeyBoard } from "../../components/keyboard";

export const Access = () => {
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { signIn, errorAccess, changeErrorAccess } = React.useContext(AuthContext)

  const [keyBoardLogin, setKeyBoardLogin] = React.useState(false)


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

        <ErroLogin errorAccess= {errorAccess}/>
        <input 
          onClick={() => setKeyBoardLogin(!keyBoardLogin)}
          type="text" 
          placeholder="CPF ou CNPJ" 
          onChange={e => {
            setLogin(e.target.value)
            changeErrorAccess()
          }}
          value={login}
          />
        <input 
          type="password" 
          placeholder="SENHA" 
          onChange={e => {
            setPassword(e.target.value)
            changeErrorAccess()
          }}
          value={password}/>

        <button type="submit"> Entrar </button>

        {keyBoardLogin && <KeyBoard />}
        
      </HomeForm>
    </HomeAccess>
  )
}
