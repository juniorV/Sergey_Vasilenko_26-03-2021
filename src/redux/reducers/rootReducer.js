import { combineReducers } from 'redux';
import { moviesReducer } from './movies-reducer';

let rootReducer = combineReducers({
	movies: moviesReducer
});

export default rootReducer;
