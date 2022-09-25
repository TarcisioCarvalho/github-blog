import styled from "styled-components";


export const PostContainer = styled.article`
    display:flex;
    flex-direction:column;
    align-items:left;
    gap:20px;
    max-width:416px;
    background-color:${({theme}) => theme["base-post"]};
    padding:2rem;
    border-radius:10px;
    border:2px solid transparent;
    cursor: pointer;
    &:hover{
        border: 2px solid ${({theme}) => theme["base-label"]};
    }
    header {
        display:flex;
        justify-content: space-between;
        h2 {
            font-size: 20px;
            font-weight: bold;
        }
        span {
            font-size:14px;
        }
    }
`;