import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Theme as t } from './styles/themes';
import axios from 'axios';
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
