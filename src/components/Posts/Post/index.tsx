import { PostContainer } from './styles'
import {formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface PostProps{
  title:string;
  body:string;
  created_at:string;
  number:number;
}



export const Post = ({title,body,created_at,number}:PostProps) => {

  return (
    <Link to={`post/${number}`} style = {{textDecoration:'none'}}>
      <PostContainer >
          <header>
              <h2>{title}</h2>
              <span>{formatDistanceToNow(new Date(created_at),{
                      locale:ptBR,
                      addSuffix:true,})}</span>
          </header>
       
      </PostContainer>
    </Link>
  )
}
