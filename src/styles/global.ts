import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: transparent ;
    box-shadow: 0 0 0 1px #799EE7;
  }

  body{
    font-family: 'Roboto', sans-serif;
  }

` 