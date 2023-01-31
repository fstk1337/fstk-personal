import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-family: 'Roboto', Verdana, Tahoma, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 120%;
    }
    body {
        min-width: 240px;
    }
`;

export default GlobalStyle;
