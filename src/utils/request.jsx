import axios from 'axios';
const BASE_URL = 'https://www.googleapis.com/books/v1';
const instance = axios.create ({baseURL: BASE_URL});

export const searchBooks = async(params) => {
    const result = await instance.get('/volumes?q=' + params);
    return result;
}