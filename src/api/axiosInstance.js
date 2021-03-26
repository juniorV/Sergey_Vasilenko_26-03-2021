import * as axios from 'axios';

export const axiosInstance = axios.create({
	withCredentials: true,
	baseURL: 'https://my-json-server.typicode.com/moviedb-tech/movies/',
})
