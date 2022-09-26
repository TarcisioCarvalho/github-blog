
import React from 'react'

interface Post{
    title:string;
    body:string;
    created_at:string;
    html_url:string;
    login:string;
    comments:number;
}

export const PostContext = React.createContext({});

export const PostsContextProvider = () => {

    const [posts,setPosts] = React.useState();

    function searchPosts(){

    }

    React.useEffect(()=>{

    })

  return (
    <div>PostsContext</div>
  )
}
