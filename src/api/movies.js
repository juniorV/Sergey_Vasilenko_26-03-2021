import { axiosInstance } from './axiosInstance';

export const moviesApi = {
	getMovies() {
		return axiosInstance.get('list');
	},
	getMovie(id) {
		return axiosInstance.get('list/' + id);
	}
};
