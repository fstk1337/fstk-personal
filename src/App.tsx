import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from './styles/MainTheme';

import AppHeader from './components/layout/AppHeader';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={MainTheme}>
        <AppHeader />
      </ThemeProvider>
    </>
  );
}

export default App;
