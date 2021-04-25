import axios from 'axios';

const api = axios.create({
    baseURL:'https://cheeryup-api.herokuapp.com/'
});

export default api;