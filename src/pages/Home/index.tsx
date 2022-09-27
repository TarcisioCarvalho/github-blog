import React from 'react'
import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'


export const Home = () => {

  

  return (
    <>
      
      <Profile/>
      <SearchBar/>
      <Posts/>
    </>
  )
}
