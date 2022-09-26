import axios from 'axios';

export const api = axios.create({
    baseURL:'https://api.github.com/users/TarcisioCarvalho'
})


export const apiPosts = axios.create({
    baseURL: 'https://api.github.com/search/issues?q=repo:TarcisioCarvalho/github-blog'
})