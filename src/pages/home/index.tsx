import React from 'react'
import * as S from './styled'

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.ImageHome> IMAGE </S.ImageHome>

      <S.FormHome action="#">
        <h2>Acessar Cadastro</h2>

        <S.FormInputs>
          <input type="text" />
          <input type="text" />
        </S.FormInputs>
        
        <S.FormButton type='submit'>
          Entrar
        </S.FormButton>

      </S.FormHome>

      <S.InfoBar>
        A menor distancia entre você e o mundo
      </S.InfoBar>
    </S.HomeContainer>
  )
}
