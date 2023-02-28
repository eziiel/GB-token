import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { SelectPlan } from '../../assets/SelectPlan/selectPlan'
import * as S from './styled'


export const Client = () => {
  return (
    <S.ContainerClient>

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
            <li>
              <NavLink to='extratosfinanceiros'>
                Extratos Financeiros
              </NavLink> 
            </li>
            <li>
              <NavLink to='boletos'>
                Boletos
              </NavLink> 
            </li>
            <li>
              <NavLink to='notasfiscais'>
                Notas Fiscais
              </NavLink> 
            </li>
            <li>
              <NavLink to='atendimentos'>
                Atendimentos
              </NavLink> 
            </li>
          </ul>
        </S.NavMenu>

        <S.ButtonExit> 
          <NavLink to='/'>Sair</NavLink>
        </S.ButtonExit>
      </S.ClienteConteiner>
      <Outlet />
    </S.ContainerClient>
  )
}
