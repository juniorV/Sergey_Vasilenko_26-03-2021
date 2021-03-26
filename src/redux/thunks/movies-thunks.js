import { moviesApi } from '../../api/movies';
import {
	setCurrentMovie, setFavoritesMovies,
	setMoviesData,
	setMoviesGenres,
} from '../reducers/movies-reducer';

const filterGenres = (movies) => {
	return Array.from(movies
			.reduce((grs, mv) => [...grs, ...mv.genres], [])
			.reduce((grs, genre) => grs.add(genre.toLowerCase()), new Set()));
}

export const getMovies = () => {
	return (dispatch) => {
		moviesApi.getMovies().then(response => {
			if (response.status === 200) {
				dispatch(setMoviesData(response.data));
				dispatch(setMoviesGenres(filterGenres(response.data)));
				dispatch(getFavoritesFromLocal());
			}
		});
	};
};

export const getMovie = (id) => {
	return (dispatch) => {
		moviesApi.getMovie(id).then(response => {
			if (response.status === 200) {
				dispatch(setCurrentMovie(response.data));
			}
		});
	};
};

export const getFavoritesFromLocal = () => {
	return (dispatch) => {
		const favorites = localStorage.getItem('favorites');
		console.log(JSON.parse(favorites));
		if (favorites) dispatch(setFavoritesMovies(JSON.parse(favorites)));
	}
}

export const setFavoritesToLocal = () => {
	return (dispatch, getState) => {
		const favorites = getState().movies.favorites;
		if (favorites) localStorage.setItem('favorites', JSON.stringify(favorites));
	}
}
