import styled, { css } from "styled-components";

interface PropsKeyboard {
  keyBoardLogin:boolean
}

export const KeyboardContent = styled.div<PropsKeyboard>`
  width: 500px;
  /* height: 300px; */
  background: linear-gradient(135deg, #254ACD, #254ACD, #5C7DD2 );

  position: absolute;

  left: 40%;
  
  
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: space-between;
  
  border-radius: 10px;
  padding: 1.5rem;
  transition: 0.7s ease-in-out;
  
  ${props => props.keyBoardLogin && css`
    left: 23%;
  `}
`
export const LettersContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  flex: 1;

  gap: 1rem;
` 
export const Letters = styled.span`
    width: 30px;
    height: 30px;
    background: ${props => props.theme['white-100']};
    color: ${props => props.theme['blue-800']};
    font-weight: 500;
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    
    cursor: pointer;
    border-radius: 6px;
` 

export const LettersButtons = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  gap: 5rem;

  
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
