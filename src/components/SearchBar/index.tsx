import React from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { SearchBarContainer } from './styles'

export const SearchBar = () => {
  
  const {posts} = React.useContext(PostsContext);
  const [input,setInput] = React.useState<string>();

  function handleSubmit(e:React.SyntheticEvent){
    e.preventDefault();
    console.log(input);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setInput(e.target.value);
  }
  return (
    <SearchBarContainer onSubmit={handleSubmit}>
        <div><label >Pulicações</label> <span>{posts?.length} publicações</span></div>
        <input type="text" placeholder='Buscar conteúdo' name='inputSearch' onChange={handleChange} value ={input} />
    </SearchBarContainer>
  )
}
