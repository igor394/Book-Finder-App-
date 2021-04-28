import axios from 'axios';
const BASE_URL = 'https://www.googleapis.com/books/v1';
const instance = axios.create ({baseURL: BASE_URL});

export const searchBooks = async(params) => {
    return await instance.get('/volumes?q=' + params);

}