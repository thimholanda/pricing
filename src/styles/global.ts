import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background-color: #ffffff;
        color: #1d2400;
        -webkit-font-smoothing: antialiased;
    }

    body, input, select, button{
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.2rem;
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }

`;
