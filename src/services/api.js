import axios from 'axios';

// const api = axios.create({
//     baseURL:'http://0.0.0.0:8000/'
// });

const baseURL = 'http://0.0.0.0:8000/'

const api = axios.create({
    baseURL: baseURL,
    timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? 'JWT ' + localStorage.getItem('access_token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 

});

export default api;