import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: '${({ theme }) => theme.fonts.primary}', sans-serif !important;
  color: ${(props) => props.theme.color.textColor};
  background: ${(props) => props.theme.color.contentColor};
  }
  p {
    margin: 0;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
   background-color: transparent !important;
    -webkit-box-shadow: 0 0 0 50px white inset;
}
  
`;

export default GlobalStyle;
