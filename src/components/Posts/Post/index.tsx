import React from 'react'
import { PostContainer } from './styles'

interface PostProps{
  title:string;
  body:string;
  created_at:string;
}

export const Post = ({title,body,created_at}:PostProps) => {
  console.log(title,body,created_at);
  return (
    <PostContainer>
        <header>
            <h2>{title}</h2>
            <span>{created_at}</span>
        </header>
        <p>
        {body.split('.')[0]} 
        </p>
    </PostContainer>
  )
}
