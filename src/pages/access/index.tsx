import React, { MouseEventHandler, TouchEventHandler } from "react"
import { AuthContext } from "../../context/autContext"
import { HomeAccess, HomeContainer, HomeForm, HomeImage, HomeImageContent } from "./styled"
import { useNavigate } from "react-router-dom";
import { ErroLogin } from "../../components/erroLogin";
import { KeyBoard } from "../../components/keyboard";

export const Access = () => {
  const { signIn, errorAccess, changeErrorAccess } = React.useContext(AuthContext)
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [keyBoardLogin, setKeyBoardLogin] = React.useState(false)
  const [fields, setFields] = React.useState<'login'| 'password'>()

  const HandleSubmit = (event:React.FormEvent) => {
    event.preventDefault()
    const data = {
      login: login,
      password: password,
    }
    
   signIn(data)
  }


  const setLoginKeyBoard = (letter: string) => {
    if(fields === 'login') {
      setLogin(previus => previus+letter)
    } else if(fields==='password') {
      setPassword(previus => previus+letter)
    }
  }

  const setKeyBoardFild = (event:any) => {
    setKeyBoardLogin(true)
    setFields(state => state == 'login'?'password':'login')
  }

  return (
    <HomeContainer>
      
      <HomeAccess> 
        <HomeForm onSubmit={HandleSubmit} position={keyBoardLogin}>  
          <h1>Acessar minha conta</h1>

          <ErroLogin errorAccess= {errorAccess}/>
          <input 
            onClick={setKeyBoardFild}
            type="text" 
            placeholder="CPF ou CNPJ" 
            onChange={e => {
              setLogin(e.target.value)
              changeErrorAccess()
            }}
            value={login}
            />
          <input 
            onClick={setKeyBoardFild}
            type="password" 
            placeholder="SENHA" 
            onChange={e => {
              setPassword(e.target.value)
              changeErrorAccess()
            }}
            value={password}/>

          <button 
            type="submit" 
            onClick={() => setKeyBoardLogin(false)}
          > Entrar </button>

          
        </HomeForm>
          {keyBoardLogin && <KeyBoard setLoginKeyBoard={setLoginKeyBoard} />}
      </HomeAccess>
        
      <HomeImageContent>
        <HomeImage /> 
      </HomeImageContent>
    </HomeContainer>
  )
}
