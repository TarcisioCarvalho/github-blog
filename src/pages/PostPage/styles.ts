import styled from "styled-components";


export const PostPageContainer = styled.main`
max-width:864px;
padding:auto 0;

`;


export const  PostHeader= styled.header`
    margin:0 auto;
    background-color:${({theme}) => theme["base-profile"]};
    padding:2rem;
    width:864px;
    border-radius:10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    position: relative;
    transform:translate(0,-50%);
    div:first-child {
        display : flex;
        justify-content:space-between;
        align-items:top;
        a {
            color:${({theme}) => theme.blue};
            text-decoration:none;
            display:flex;
            align-items:center;
            gap: 0.5rem;
            transition: 0.2s;
            border-bottom:1px solid transparent;
            &:hover{
                transition: 0.2s;
                border-bottom:1px solid ${({theme}) => theme.blue};
            }
        }
    }

    h1 {
        margin-top:20px;
    }    

    div:last-child{
        margin-top:8px;
        display:flex;
        gap:2rem;
        span {
            display:flex;
            align-items:center;
            gap:0.5rem;
        }
    }
`;

export const PostContent = styled.main`
margin:0 auto;
max-width:864px;
padding:40 32px;
display:flex;
flex-direction:column;
gap:24px;
`;