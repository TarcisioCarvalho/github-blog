import styled from "styled-components";


export const SearchBarContainer = styled.form`

display:flex;
flex-direction:column;
gap:12px;
margin: 0 auto;
max-width:864px;
height:50px;

input {
    padding:12px 16px 12px 16px;
    background-color:${({theme}) => theme["base-input"]};
    border-radius:6px;
    border: 1px solid ${({theme}) => theme["base-border"]};
    color:${({theme}) => theme["base-text"]};
    &:focus{
        border:1px solid ${({theme}) => theme.blue};
    }
}

div {
    display:flex;
    justify-content:space-between;
    align-items:center;
    label {
        font-size:18px;
        color:${({theme}) => theme["base-subtitle"]};
        font-weight: bold;
    }

    span {
        color:${({theme}) => theme["base-span"]};
        font-size:14px;
    }
}
`;