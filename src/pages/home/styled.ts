import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;

  width: 1200px;
  margin: 5rem auto;
  `

export const ImageHome = styled.img`
  height: 300px;
  width: 80%;
  background: blue;
  font-size: 3rem;
  border-radius: 8px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`

export const FormHome = styled.form`
  width: 80%;
  border-radius: 8px;
  height: 200px;
  gap: 3rem;

  display: flex;
  flex-direction: column;
`

export const FormInputs = styled.form`
  display: flex;
  gap: 2rem;
  justify-content: space-around;

  input {
    width: 300px;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 10px;

    :focus{
      border: none;
    }

  }
`

export const FormButton = styled.button`
  align-self: center;
  width: 100px;

`

export const InfoBar = styled.section`
  width: 100%;
  background: #799EE7 ;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  height: 150px;

  font-size: 2.5rem;
`
