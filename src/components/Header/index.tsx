import React from 'react'
import { HeaderContainer } from './styles'
import logo from '../../assets/img/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
        <img src={logo} alt="" />
       
    </HeaderContainer>
  )
}
