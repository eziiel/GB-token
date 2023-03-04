import React from 'react'
import { ErroAccess } from './styled'

interface Error{
  errorAccess: boolean
}
export const ErroLogin = ({errorAccess}:Error) => {

  return (
    <ErroAccess>
      {errorAccess ?'Usuário ou senha incorretos!' : ' '} 
    </ErroAccess>
  )
}
