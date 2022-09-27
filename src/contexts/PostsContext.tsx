
import React, { Children, ReactNode } from 'react'
import { apiPosts } from '../lib/axios';

interface Post{
  title:string;
  body:string;
  created_at:string;
  number:number;
}

interface PostContextType{
   posts:Post[] | undefined;
   searchPosts: (query?:string) => void;
}

interface PostContextProvider{
  children:ReactNode;
}

export const PostsContext = React.createContext({} as PostContextType);

export const PostsContextProvider = ({children}:PostContextProvider) => {

  const [posts,setPosts] = React.useState<Post[]>()

  async function searchPosts(query?:string){
    
    const URL = query === undefined?"repo:TarcisioCarvalho/github-blog":`${query}repo:TarcisioCarvalho/github-blog`
    const RESPONSE = await apiPosts.get('',{
      params:{
        q:URL
      }
    });
    const {title,body,created_at} = RESPONSE.data;
    
    const postsResp:Post[] = RESPONSE.data.items.map((post:any) => {
      return {
        title:post.title,
        created_at:post.created_at,
        body:post.body,
        number:post.number
      }
    })
    setPosts(state => [...postsResp])
  }

  React.useEffect(()=>{
    searchPosts();
  },[]) 

  return (
    <PostsContext.Provider value={{posts,searchPosts}}>
      {children}
    </PostsContext.Provider>
  )
}
