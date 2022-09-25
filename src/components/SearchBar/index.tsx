import React from 'react'
import { SearchBarContainer } from './styles'

export const SearchBar = () => {
  return (
    <SearchBarContainer>
        <div><label >Pulicações</label> <span>6 publicações</span></div>
        <input type="text" placeholder='Buscar conteúdo' name='inputSearch' />
    </SearchBarContainer>
  )
}
