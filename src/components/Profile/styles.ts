import styled from "styled-components";

export const ProfileContainer = styled.section`

    display:flex;
    justify-content:center;
    align-items:center;
    gap:2rem;
    width:864px;
    margin:0 auto;
    padding:40px 32px 32px 32px;
    background-color:${({theme}) => theme["base-profile"]};

    position:relative;
    transform:translate(0,-50%);
 /*    top:50%;
    left:50%;
    transform : translate(-50%,-50%); */


    div {
        h2 {
            display: flex;
            justify-content:space-between;
            align-items:top;
            font-size:1.5rem;
            font-weight:bold;
            color: ${({theme}) => theme["base-title"]};
            span {
                
                
                font-size : .75rem;
                font-weight : bold;

                a {
                    color : ${({theme}) => theme.blue};
                    text-decoration : none;
                    display : flex;
                    gap: .5rem;
                    transition:.2s;

                    &:hover{
                        transition:.2s;
                        border-bottom: 1px solid ${({theme}) => theme.blue};
                    }
                }
                
            }
        }
        p {
            margin-top:.5rem;
            color:${({theme}) => theme["base-text"]};
        }
        div:last-child {
            margin-top: 1.5rem;
            display :flex;
            gap: 0.5rem;
            span {
                display:flex;
                align-items:center;
                gap: 0.5rem;
                color : ${({theme}) => theme["base-subtitle"]};
            }
        }

    }
`;