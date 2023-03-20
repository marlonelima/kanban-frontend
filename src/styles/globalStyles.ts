import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Montserrat';
    background: #f7f7f7;
    min-height: 100%;
  }
`;

export default GlobalStyle;
