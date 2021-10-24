/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './App.css';
import axios from 'axios';
import t from './styles/themes';
import GlobalStyle from './styles/GlobalStyles';
import Routes from './routes/Routes';

function App() {
  const backendUrl = 'https://api.themoviedb.org/3/movie/';
  axios.defaults.baseURL = backendUrl;
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const Theme = t(currentTheme);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
