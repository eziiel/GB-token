import React from 'react'
import { SelectPlan } from '../../assets/SelectPlan/selectPlan'
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

      <S.PlanClient>
        <h2>Planos:</h2>

        <SelectPlan />
      </S.PlanClient>

      <S.NavMenu>
        <ul>
          <li>Extratos Financeiros</li>
          <li>Boletos</li>
          <li>Notas Fiscais</li>
          <li>Atendimentos</li>
        </ul>
      </S.NavMenu>

      <S.ButtonExit> Sair </S.ButtonExit>
    </S.ClienteConteiner>
  )
}
