import React from 'react'
import { PostContainer } from './styles'
import {formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

interface PostProps{
  title:string;
  body:string;
  created_at:string;
}

export const Post = ({title,body,created_at}:PostProps) => {
  
  return (
    <PostContainer>
        <header>
            <h2>{title}</h2>
            <span>{formatDistanceToNow(new Date(created_at),{
                    locale:ptBR,
                    addSuffix:true,})}</span>
        </header>
        <p>
        {body.split('.')[0]} 
        </p>
    </PostContainer>
  )
}
