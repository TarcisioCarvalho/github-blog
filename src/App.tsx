import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Posts } from "./components/Posts"
import { Profile } from "./components/Profile"
import { SearchBar } from "./components/SearchBar"
import { PostsContextProvider } from "./contexts/PostsContext"
import { Home } from "./pages/Home"
import { PostPage } from "./pages/PostPage"
import {Router} from './Router'
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"

function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsContextProvider>
          <Router/>
        </PostsContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
