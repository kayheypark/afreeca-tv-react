import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    };

    body {
        font-size: 14px;
        line-height: 1;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
    }

    ul, ol, dl, li, dd {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    input:focus {
        outline: none;
    }
`;

export default GlobalStyle;
