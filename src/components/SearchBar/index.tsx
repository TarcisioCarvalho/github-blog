import React from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { SearchBarContainer } from './styles'

export const SearchBar = () => {
  const {posts} = React.useContext(PostsContext);
  return (
    <SearchBarContainer>
        <div><label >Pulicações</label> <span>{posts?.length} publicações</span></div>
        <input type="text" placeholder='Buscar conteúdo' name='inputSearch' />
    </SearchBarContainer>
  )
}
