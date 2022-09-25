import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Posts } from "./components/Posts"
import { Profile } from "./components/Profile"
import { SearchBar } from "./components/SearchBar"
import { Home } from "./pages/Home"
import { PostPage } from "./pages/PostPage"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"


function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <PostPage/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
