import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addFavoriteMovie,
	removeFavoriteMovie,
} from '../../redux/reducers/movies-reducer';
import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

function FavoriteBtn(props) {
	const {favorites} = useSelector(
		(state) => ({favorites: state.movies.favorites}));
	const dispatch = useDispatch();

	const isInFavorites = (id) => {
		return favorites.filter(m => m.id === id).length;
	};

	const addToFavorites = (e) => {
		e.preventDefault();
		dispatch(addFavoriteMovie(props.movie));
	};

	const removeFromFavorites = (e) => {
		e.preventDefault();
		dispatch(removeFavoriteMovie(props.movie.id));
	};

	return <div style={props.style}>
		{isInFavorites(props.movie.id)
			? (<div>
				<Button icon={<StarFilled />} onClick={removeFromFavorites}/>
			</div>) : (<div>
				<Button icon={<StarOutlined />} onClick={addToFavorites}/>
			</div>)
		}
	</div>
}

export { FavoriteBtn };
