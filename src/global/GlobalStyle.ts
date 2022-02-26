import { createGlobalStyle } from "styled-components";

export const GloblaStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    outline: none;
  }

  body, html {
    height: 100vh;
    scroll-behavior: smooth;
    font-family: 'Heebo', sans-serif;
  }

  html {
    @media (max-width: 1440px) {
      font-size: 85%; //1rem = 12px
    }
  }

  body, 
  input, 
  textarea, 
  button {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
