import { createGlobalStyle } from 'styled-components';
import { ColorUI } from './variable/color';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    };

    body {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        color: ${ColorUI.Text};
        font-family: 'NanumGothic', Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        font-weight: 400;
    }

    ul, ol, dl, li, dd {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
        font-family: inherit;
        padding: 0;
        border: 0;
    }

    input:focus {
        outline: none;
    }

    a {
        color: ${ColorUI.Text};
        text-decoration: none;
    }

    p {
        margin: 0;
        padding: 0;
    }

    em, i {
        font-style: unset;
    }
`;

export default GlobalStyle;
