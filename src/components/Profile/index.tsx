import React from 'react'
import { ProfileContainer } from './styles'
import { ArrowSquareUpRight, Buildings, GithubLogo, Users } from 'phosphor-react';
import { api } from '../../lib/axios';

interface DataProfileProps{
  img:string;
  name:string;
  bio:string;
  company:string;
  html_url:string;
  login:string;
  followers:number;
}

export const Profile = () => {

  const [dataProfile,setDataProfile] = React.useState({} as DataProfileProps);

  async function req(){
    const RESPONSE = await api.get('');
    const {avatar_url,name,bio,company,html_url,login,followers} = RESPONSE.data;
    setDataProfile({...dataProfile,
      name,
      bio,
      company,
      login,
      followers,
      img:avatar_url,
      html_url
    })
    
  }

  React.useEffect(()=>{
    req();
  })


  return (
    <ProfileContainer>
        <img src={dataProfile.img} alt="Foto de perfil" />
        <div>
            <div>
                <h2>{dataProfile.name} <span><a href={dataProfile.html_url}> github <span><ArrowSquareUpRight size={12}/></span></a></span></h2>
            </div>
            <p>{dataProfile.bio} </p>
            <div><span><GithubLogo  size={18}/> {dataProfile.login}</span><span><Buildings size={18}/> {dataProfile.company}</span><span><Users size={18}/> {dataProfile.followers} seguidores</span></div>
        </div>
    </ProfileContainer>
  )
}
