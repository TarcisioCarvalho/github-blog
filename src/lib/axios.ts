import axios from 'axios';

export const api = axios.create({
    baseURL:'https://api.github.com/users/TarcisioCarvalho'
})


export const apiPosts = axios.create({
    baseURL: 'https://api.github.com/search/issues'
})


export const apiPostDetail = axios.create({
    baseURL: 'https://api.github.com/repos/TarcisioCarvalho/github-blog/issues'
})