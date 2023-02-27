import styled from "styled-components";

export const HomeAccess = styled.div`
  width: 500px;
  left: 0;
  height: 100vh;
  padding-top: 3rem;

  background: linear-gradient(135deg, #254ACD, #5C7DD2 );

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomeForm = styled.form`
  width: 85%;
  height: 400px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  align-items: start;
  justify-content: center;

  background: #254ACD;

  h1 {
    padding-bottom: 1rem;
  }
  
  input {
    width: 300px;
    padding: 0.5rem;
    border-radius: 8px;

    border: none;


  }

  button {
    cursor: pointer;
    margin-top: 2rem;
    padding: 0.5rem 3rem;
  
    border: none;


    border-radius: 10px;
    font-size: 1.5rem;
  }
`
