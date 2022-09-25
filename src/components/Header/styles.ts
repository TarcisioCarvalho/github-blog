import styled from "styled-components";
import backgroundImage from '../../assets/img/backgroundHeader.png';

export	const HeaderContainer = styled.header`
    //background-color:${({theme}) => theme["base-border"]};
    display:flex;
    align-items:center;
    justify-content:center;
    background-image:url(${backgroundImage});
    background-size:cover;
    background-repeat:no-repeat;
    padding-top:2rem;
    padding-bottom:8rem;
   
`;