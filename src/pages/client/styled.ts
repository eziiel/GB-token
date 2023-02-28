import styled from "styled-components";


export const ContainerClient = styled.main`
  display: flex;
  justify-content: space-between;
  
`

export const ClienteConteiner = styled.main`
  min-width: 500px;
  left: 0;
  height: 100vh;
  padding-top: 3rem;

  background: linear-gradient(135deg, #254ACD, #5C7DD2 );


  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
`

export const ClientInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding:  2rem;
  background-color: #255bda;

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

export const PlanClient = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: top;

  /* button {
    background: #D9D9D9 ;
    border-radius: 8px;
    padding: 0.75rem;
    cursor: pointer;
  } */
`

export const NavMenu = styled.nav`
  margin-top: 3rem;
  width: 80%;
  border-radius: 8px;
  color: #0F076D;

  ul {
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    li {
      width: 100%;
      border-radius: 8px;
      cursor: pointer;
      overflow: hidden;
      transition: 0.2s ease-in-out;

      
      .active {
        width: 100%;
        background: red;
        color: #fff;
        text-align: center;
      }
    }
    
    a {
      display: inline-block;
      width: 60%;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: 0.2s ease-in-out;

      background: #D9D9D9 ;
      color: #0F076D;
      font-weight: 500;
    }
  }
`

export const ButtonExit = styled.button`
  align-self: start;
  margin-left: 10%;
  
  border-radius: 10px;
  border: none;

  overflow: hidden;
  
  a {
    padding: 1rem 3rem;
    display: inline-block;
  }
`