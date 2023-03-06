import styled from "styled-components";

export const KeyboardContent = styled.div`
  width: 500px;
  height: 300px;
  background: red;
  position: absolute;

  left: 480px;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;

  padding: 1rem;

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
    /* padding: 0.5rem; */
    width: 30px;
    height: 30px;
    background: blue;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    
    cursor: pointer;
    border-radius: 6px;
` 