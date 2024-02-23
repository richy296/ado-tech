import axios from 'axios';

export const productsApi = axios.create({
    baseURL: 'https://api.restful-api.dev'
})