import styled from "styled-components";


export const PostContainer = styled.article`
    
    display:flex;
    flex-direction:column;
    align-items:left;
    gap:20px;
    width:416px;
    height:200px;
    background-color:${({theme}) => theme["base-post"]};
    padding:2rem;
    border-radius:10px;
    border:2px solid transparent;
    color:${({theme}) => theme["base-text"]};
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
            font-size:10px;
        }
    }
`;