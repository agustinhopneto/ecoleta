import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* :root {
  --primary-color: #34CB79;
  --title-color: #322153;
  --text-color: #6C6C80;
  } */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    color: #6c6c80;
  }

  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #322153;
    font-family: Ubuntu;
  }
`;
