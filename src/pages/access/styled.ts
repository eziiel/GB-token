import styled, { css } from "styled-components";

interface PropsForm {
  position: boolean;
}

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const HomeAccess = styled.div`
  width: 50%;
  left: 0;
  height: 100vh;
  padding-top: 3rem;


  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeImageContent = styled.div`
  padding: 2rem;
  width: 50%;
  height: 100%;
`

export const HomeImage = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #254ACD, #5C7DD2 );

  width: 100%;
  height: 100%;
  border-radius: 50px;
`

export const HomeForm = styled.form<PropsForm>`
  width: 85%;
  height: 400px;
  border-radius: 10px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  align-items: start;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out ;

  ${props => props.position && css`
    margin-left: -50%;
  `}

  h1 {
    padding-bottom: 1rem;
    color: ${props => props.theme['blue-500']};
  }
  
  input {
    width: 300px;
    padding: 0.5rem;

    border: none;
    border-bottom: 1px solid ${props => props.theme['blue-01']};

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  button {
    cursor: pointer;
    margin-top: 2rem;
    padding: 0.5rem 3rem;
    width: 300px;

    border: none;
    background: ${props => props.theme['blue-01']};
    color: ${props => props.theme['white']};

    border-radius: 10px;
    font-size: 1.5rem;

    :hover {
      background: #3861F5;
      color: #fff;
    }
  }
`
