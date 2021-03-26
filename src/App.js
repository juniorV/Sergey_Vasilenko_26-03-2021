import React, { useEffect } from 'react';
import './App.css';
import { Layout, Row, Col } from 'antd';
import MoviesGallery from './components/MoviesGallery/MoviesGallery';
import { FavoriteList } from './components/FavoriteList/FavoriteList';
import { useDispatch } from 'react-redux';
import { getMovies, setFavoritesToLocal } from './redux/thunks/movies-thunks';
import { MovieModal } from './components/MovieModal/MovieModal';
import { Route } from 'react-router-dom';
import useUnload from './hooks/hooks';

function App() {
	const dispatch = useDispatch();
	useEffect(function() {
		dispatch(getMovies())
	}, [dispatch]);

	// save favorites movies to localstorage before unload
	useUnload(e => {
		dispatch(setFavoritesToLocal());
	});

	return (<>
		<Layout style={{
			padding: 20,
			minHeight: '100vh',
		}}>
			<Row gutter={[15, 15]} align='center'>
				<Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}}
					 md={{span: 15, order: 1}} lg={14} xl={12}>
					<MoviesGallery/>
				</Col>
				<Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}}
					 md={{span: 9, order: 2}} lg={8} xl={6}>
					<FavoriteList/>
				</Col>
			</Row>
		</Layout>
		<Route path='/:movieId'>
			<MovieModal/>
		</Route>
	</>);
}

export default App;
