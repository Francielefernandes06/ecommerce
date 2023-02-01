import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }
    body {
        width:100vw;
        height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:10px;
        background-color: #f5f5f5;
    }

    a{
        text-decoration: none;
        color: #000;

    }
`;

export default GlobalStyle;