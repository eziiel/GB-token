import styled, { css } from "styled-components";

interface PropsKeyboard {
  keyBoardLogin:boolean
}

export const KeyboardContent = styled.div<PropsKeyboard>`
  width: 320px;
  /* height: 300px; */
  background: linear-gradient(135deg, #254ACD, #254ACD, #5C7DD2 );

  position: absolute;

  left: 40%;
  
  
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  
  border-radius: 10px;
  padding: 1rem;
  transition: 0.7s ease-in-out;
  
  ${props => props.keyBoardLogin && css`
    left: 25%;
  `}
`
export const LettersContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  flex: 1;

  gap: 0.5rem;
` 
export const Letters = styled.span`
    width: 20.5px;
    height: 20.5px;
    background: ${props => props.theme['white-100']};
    color: ${props => props.theme['blue-800']};
    font-weight: 500;
    font-size: 0.875rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    
    cursor: pointer;
    border-radius: 6px;
` 

export const NumbersContent = styled(LettersContent)`

`


export const LettersButtons = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;

  justify-content: center;
  gap: 5rem;
  border-top: 1px solid ${props => props.theme['white-01']};

  padding-top: 1rem;
  
  
  button {
    padding: 0.5rem 2rem;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;

    border-radius: 10px;

    border: none;
    background: ${props => props.theme['white-01']};
    color: ${props => props.theme['blue-700']};
  }
`
