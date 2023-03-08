import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

  button, text-area, input {
    font-family: 'Roboto', sans-serif;

    :focus {
      outline: none;
      box-shadow: 0 0 0 2px #5C7DD2;
    }
  }

  ul, li, a {
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }

`