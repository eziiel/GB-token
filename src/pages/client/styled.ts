import styled from "styled-components";

export const ClienteConteiner = styled.main`
  width: 500px;
  left: 0;
  height: 100vh;
  padding-top: 3rem;

  background: red;

  display: flex;
  gap: 4rem;
  flex-direction: column;
  align-items: center;
`

export const ClientInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding:  2rem;
  background-color: blue;

  border-radius: 10px;
  width: 80%;
  height: 230px;

  h1 {
    /* margin-bottom: 2rem; */
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const SelectPlan = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    background: blue ;
    border-radius: 8px;
    padding: 0.75rem;
  }
`

export const NavMenu = styled.nav`
  margin-top: 2rem;
  width: 80%;
  border-radius: 8px;
  
  ul {
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    background: blue;

    li {
      padding: 0.5rem;
      background: tomato;
      border-radius: 8px;
    }
  }
`

export const ButtonExit = styled.button`
  padding: 1rem 3rem;
  align-self: start;
  margin-left: 10%;

  border-radius: 10px;
  border: none;
`