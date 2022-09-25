import { ArrowCircleLeft, ArrowSquareUpRight, Backpack, Balloon, Calendar, ChatCircleDots, GithubLogo } from 'phosphor-react'
import React from 'react'
import { Header } from '../../components/Header'
import { PostContent, PostHeader, PostPageContainer } from './styles'

export const PostPage = () => {
  return (
    <>
          <Header/>
          
          <PostHeader>
            <div><a href=""><ArrowCircleLeft/> Voltar </a><a href="">Github <ArrowSquareUpRight size={12}/></a></div>
            <h1>JavaScript And DataStructures</h1>
            <div><span><GithubLogo  size={18}/> Cameron</span><span><Calendar size={18}/>Há 1 dia</span><span><ChatCircleDots size={18}/>6 Comentários </span></div>
          </PostHeader>
          <PostContent/>
          
    </>
  

  )
}
