import React from "react"
import { HomeAccess, HomeForm } from "./styled"

export const Access = () => {
  const [client, setClient] = React.useState({
    login: '',
    senha: ''
  })

  function HandleClient(event:any) {
    if(event.target.type === 'text') {

      let novoLogin = {
        login: event.target.value,
        senha: client.senha,
      }

      setClient(previus => previus = novoLogin)
    } else {
     
      let novoLogin = {
        login: client.login,
        senha: event.target.value,
      }

      setClient(previus => previus = novoLogin)
    }
  }
  

  const handleForm = (event:any) => {
    event.preventDefault();

    console.log(client)

    if(!client.login || !client.senha) {
      alert("Tu é leigo???")
    }
  }



  return (
    <HomeAccess> 
      <HomeForm onSubmit={handleForm}>  
        <h1>Acessar minha conta</h1>

        <input 
          type="text" 
          placeholder="CPF ou CNPJ" 
          onChange={HandleClient}
          value={client.login}
          />
        <input 
          type="password" 
          placeholder="SENHA" 
          onChange={HandleClient}
          value={client.senha}/>

        <button type="submit"> Entrar </button>
      </HomeForm>
    </HomeAccess>
  )
}
