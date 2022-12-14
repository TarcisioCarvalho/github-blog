import { ArrowCircleLeft, ArrowSquareUpRight, Calendar, ChatCircleDots, GithubLogo } from 'phosphor-react'
import React from 'react'
import { PostContent, PostHeader } from './styles';
import { Link, useParams } from 'react-router-dom';
import { apiPostDetail } from '../../lib/axios';
import ReactMarkdonw from 'react-markdown';
import {formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface PostPageType{
  title:string;
  login:string;
  comments:number;
  created_at:string;
  body:string;
  html_url:string;
}

export const PostPage = () => {

  const {number} = useParams();
  const [post,setPost] = React.useState<PostPageType>();

  async function req() {

    const RESPONSE = await apiPostDetail.get(`${number}`);
    const {title,user,comments,created_at,body,html_url} = RESPONSE.data;
    const {login} = user;

    setPost({
      html_url:html_url,
      body:body,
      comments:comments,
      login:login,
      created_at:created_at,
      title:title
    })
  }

  React.useEffect(()=>{
    req();
  },[])
   
  return (
    <>
          
          
          <PostHeader>
            <div><Link to={'/'}><ArrowCircleLeft/> Voltar </Link><a href={post?.html_url}>Github <ArrowSquareUpRight size={12}/></a></div>
            <h1>{post?.title}</h1>
            <div><span><GithubLogo  size={18}/> {post?.login}</span>
            <span><Calendar size={18}/>{post?.created_at && formatDistanceToNow(new Date(post.created_at),{
                      locale:ptBR,
                      addSuffix:true,})}
            </span><span><ChatCircleDots size={18}/>{post?.comments} Comentários </span></div>
          </PostHeader>
          <PostContent>
            {post?.body && <ReactMarkdonw>{post?.body}</ReactMarkdonw>}
          </PostContent>
          
    </>
  

  )
}
