import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from '@mui/material/styles';
import MainTheme from './styles/MainTheme';

import AppHeader from './components/layout/AppHeader';
import { FC } from 'react';
import { Container } from './mui';

interface AppProps {
  text: string
}

const App:FC<AppProps> = (props) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={MainTheme}>
        <AppHeader />
        <Container maxWidth="lg"> 
          <center><h2>{ props.text } Page</h2></center>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
