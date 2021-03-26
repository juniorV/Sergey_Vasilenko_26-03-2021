import React from 'react';
import { Spin, Card, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { MovieCard } from './MovieCard';
import { MovieListItem } from './MovieListItem';
import { GenreSelect } from './GenreSelect';
import { ViewSelect } from './ViewSelect';

function MoviesGallery(props) {
	const { movies, currentView, currentGenre } = useSelector((state) => ({
		movies: state.movies.movies,
		currentView: state.movies.currentView,
		currentGenre: state.movies.currentGenre
	}));

	const filteredMovies = () => {
		return currentGenre
			? movies.filter(m => m.genres.map(g => g.toLowerCase()).includes(currentGenre))
			: movies;
	}

	const Movie = (props) => {
		return currentView === 'list' ? <MovieListItem {...props}/> : <MovieCard {...props}/>;
	}

	return (
		<div>
			<Card title="Movies Gallery">
				{!movies.length ? (
					<div style={{textAlign: 'center'}}><Spin tip="Loading..."/></div>
				) : (<>
					<Row gutter={[15, 15]}>
						<Col xs={24} sm={24} md={12}><GenreSelect/></Col>
						<Col xs={24} sm={24} md={12} align="end">view as: <ViewSelect/></Col>
						<Col span={24}>
							<Row gutter={[15, 15]}>
								{filteredMovies().map(m => <Movie key={m.id} movie={m} />)}
							</Row>
						</Col>
					</Row>
				</>)}
			</Card>
		</div>
	)
}

export default React.memo(MoviesGallery);
