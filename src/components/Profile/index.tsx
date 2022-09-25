import React from 'react'
import { ProfileContainer } from './styles'
import image from '../../assets/img/profile.svg';
import { ArrowSquareUpRight, Buildings, GithubLogo, Users } from 'phosphor-react';

export const Profile = () => {
  return (
    <ProfileContainer>
        <img src={image} alt="Foto de perfil" />
        <div>
            <div>
                <h2>Cameron <span><a href="https://github.com/TarcisioCarvalho"> github <span><ArrowSquareUpRight size={12}/></span></a></span></h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos aperiam praesentium laudantium atque esse. </p>
            <div><span><GithubLogo  size={18}/> Cameron</span><span><Buildings size={18}/> Rocket</span><span><Users size={18}/> 32 seguidores</span></div>
        </div>
    </ProfileContainer>
  )
}
