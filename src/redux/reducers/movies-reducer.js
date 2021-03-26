let initialState = {
	movies: [],
	currentMovie: null,
	favorites: [],
	views: ['card', 'list'],
	currentView: 'card',
	genres: [],
	currentGenre: ''
};

const SET_MOVIES_DATA = 'SET_MOVIES_DATA';
const SET_MOVIES_GENRES = 'SET_MOVIES_GENRES';
const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE';
const SET_CURRENT_GENRE = 'SET_CURRENT_GENRE';
const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';
const SET_FAVORITES_MOVIES = 'SET_FAVORITES_MOVIES';

const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE';

const REMOVE_FAVORITE_MOVIE = 'REMOVE_FAVORITE_MOVIE';

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MOVIES_DATA:
			return {...state, movies: action.payload}
		case SET_MOVIES_GENRES:
			return {...state, genres: action.payload}
		case SET_CURRENT_MOVIE:
			return {...state, currentMovie: action.payload}
		case SET_CURRENT_GENRE:
			return {...state, currentGenre: action.payload}
		case SET_CURRENT_VIEW:
			return {...state, currentView: action.payload}
		case SET_FAVORITES_MOVIES:
			return {...state, favorites: action.payload}
		case ADD_FAVORITE_MOVIE:
			return {...state, favorites: [...state.favorites, action.payload]}
		case REMOVE_FAVORITE_MOVIE:
			return {...state, favorites: [...state.favorites.filter(movie => movie.id !== action.payload)]}
		default:
			return state;
	}
};

export const setMoviesData = (movies) => {
	return {type: SET_MOVIES_DATA, payload: movies};
}
export const setMoviesGenres = (genres) => {
	return {type: SET_MOVIES_GENRES, payload: genres};
}
export const setCurrentMovie = (movie) => {
	return {type: SET_CURRENT_MOVIE, payload: movie};
}
export const setCurrentGenre = (genre) => {
	return {type: SET_CURRENT_GENRE, payload: genre};
}
export const setCurrentView = (view) => {
	return {type: SET_CURRENT_VIEW, payload: view};
}
export const setFavoritesMovies = (movies) => {
	return {type: SET_FAVORITES_MOVIES, payload: movies};
}
export const addFavoriteMovie = (movie) => {
	return {type: ADD_FAVORITE_MOVIE, payload: movie};
}
export const removeFavoriteMovie = (id) => {
	return {type: REMOVE_FAVORITE_MOVIE, payload: id};
}

export { moviesReducer };
