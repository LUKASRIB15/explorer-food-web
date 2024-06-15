import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${props=>props.theme.colors["dark-400"]};
    color: ${props=>props.theme.colors["light-300"]};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }
`