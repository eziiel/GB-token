import React from "react";
import { api } from "../lib/axios";
import { useNavigate } from "react-router-dom";

type SignInCredentials = {
  login: string
  password: string
}

interface DataFature {
  statusFature: string
  vencimento: string
  boleto: string
}

interface DataPlan {
  name: string
  info:{
    loginData: string
  }
  statusPlan: string
  contratos: {
    ativacao: string
    upgrade: string
  }
  faturas: DataFature[]
}
interface DataUser {
  login: {
    access: string
    senha: string
  }
  dataClient: {
    name: string         
    telefone: string
    email: string
    endereco: {
      rua: string
      bairro: string
      cidade: string
      estado: string
      complemento: string
    }
  }
  planos: DataPlan[]
}


type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void> 
  isAuthenticated: boolean
  dataClient: DataUser | []
  errorAccess: boolean
  changeErrorAccess: () => void
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = React.createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [dataClient, setDataClient] = React.useState<DataUser | []>([])
  const [errorAccess, setErrorAccess] = React.useState<boolean>(false)
  const isAuthenticated = false  
  const navigate = useNavigate()

  async function signIn({ login, password}: SignInCredentials) {

    // try{
    //   const response = await (await api.get(`clients?login.access=${login}`)).data

    //   if(response[0].login.senha === password) {
    //     setDataClient(response)
        navigate("/client")
    //   }
    //   setErrorAccess(false)
    // } catch(error) {
    //   setErrorAccess(true)
    // }
  }

  const changeErrorAccess = () => {
    setErrorAccess(false)
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, dataClient, errorAccess, changeErrorAccess}}>
      {children}
    </AuthContext.Provider>
  )
}
