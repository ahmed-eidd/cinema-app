import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './components/Layout/Layout';
import { darkTheme, lightTheme } from './styles/themes';
import { constants } from './helpers/constants';

function App() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  return (
    <ThemeProvider
      theme={currentTheme === constants.DARK_THEME ? darkTheme : lightTheme}
    >
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
