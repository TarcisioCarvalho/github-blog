import React from 'react'
import { PostsContext } from '../../contexts/PostsContext';
import { apiPosts } from '../../lib/axios';
import { Post } from './Post'
import { PostsContainer } from './styles'

interface Post{
  title:string;
  body:string;
  created_at:string;
}



export const Posts = () => {

  const {posts} = React.useContext(PostsContext);
  /* const [posts,setPosts] = React.useState<Post[]>()

  async function searchPosts(){
    const RESPONSE = await apiPosts.get('');
    const {title,body,created_at} = RESPONSE.data;
    
    const postsResp:Post[] = RESPONSE.data.items.map((post:any) => {
      return {
        title:post.title,
        created_at:post.created_at,
        body:post.body,
      }
    })
    setPosts(state => [...postsResp])
  }

  React.useEffect(()=>{
    searchPosts();
  },[])  */ 
  
  return (
    
    <PostsContainer>
       
      {posts?.map(post => <Post  body={post.body} title = {post.title} created_at = {post.created_at}/>)}
        
    </PostsContainer>
  )
}
