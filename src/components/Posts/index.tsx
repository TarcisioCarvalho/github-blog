import React from 'react'
import { PostsContext } from '../../contexts/PostsContext';
import { Post } from './Post'
import { PostsContainer } from './styles'

interface Post{
  number:number;
  title:string;
  body:string;
  created_at:string;
}

export const Posts = () => {

  const {posts} = React.useContext(PostsContext);
  
  return (
    
    <PostsContainer>
       
      {posts?.map(post => <Post key={post.number} number = {post.number} body={post.body} title = {post.title} created_at = {post.created_at}/>)}
        
    </PostsContainer>
  )
}
