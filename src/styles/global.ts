import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

    :focus{
        outline:0;
        box-shadow:0 0 0 2px ${props => props.theme["base-border"]};
    }

    body {
        background-color:${({theme})=> theme["base-background"]};
        color:${({theme})=> theme["base-text"]};
        -webkit-font-smoothing:antialiased;
        font-family: 'Nunito', sans-serif;
    }

    body, input, textArea , button {
        font:400 1rem Nunito,sans serif;
    }
}


`;