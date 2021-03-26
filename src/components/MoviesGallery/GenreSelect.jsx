import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentGenre } from '../../redux/reducers/movies-reducer';
import { capitalizeFirstLetter } from '../../helpers/helpers';
const { Option } = Select;

function GenreSelect(props) {
	const dispatch = useDispatch();
	const {genres, currentGenre} = useSelector((state) => ({
		genres: state.movies.genres,
		currentGenre: state.movies.currentGenre,
	}));
	const onGenreChange = (genre) => {
		dispatch(setCurrentGenre(genre));
	};
	return <>
		<Select defaultValue={currentGenre ? currentGenre : 'Choose genre'} style={{width: 240}} onChange={onGenreChange}>
			<Option value="">All</Option>
			{genres.map(genre => <Option key={genre} value={genre}>{capitalizeFirstLetter(genre)}</Option>)}
		</Select>
	</>;
}

export {GenreSelect};
