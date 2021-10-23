import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './components/Layout/Layout';
import { Theme as t } from './styles/themes';
import { constants } from './helpers/constants';
import MovieSlider from './components/MovieSlider/MovieSlider';
import axios from 'axios';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  const backendUrl = 'https://api.themoviedb.org/3/movie/';
  axios.defaults.baseURL = backendUrl;

  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const Theme = t(currentTheme);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
