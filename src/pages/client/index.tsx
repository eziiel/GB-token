import React from 'react'
import * as S from './styled'

export const Client = () => {
  return (
    <S.ClienteConteiner>
      <S.ClientInfo>
        <h1>Minha Conta</h1>

        <div>
          <span>Nome:</span>
          <span>Endereço:</span>
          <span>Cidade:</span>
        </div>
      </S.ClientInfo>

      <S.SelectPlan>
        <h2>Planos:</h2>
        <span>PLANO 0</span>
      </S.SelectPlan>

      <S.NavMenu>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </S.NavMenu>

      <S.ButtonExit> Sair </S.ButtonExit>
    </S.ClienteConteiner>
  )
}
