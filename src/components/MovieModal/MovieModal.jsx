import React, { useEffect, useState } from 'react';
import { Tag, Row, Col, Modal, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMovie } from '../../redux/reducers/movies-reducer';
import { useParams, useHistory } from 'react-router-dom';
import { getMovie } from '../../redux/thunks/movies-thunks';

import { Typography } from 'antd';
import { FavoriteBtn } from '../shared/FavoriteBtn';
const { Title } = Typography;

function MovieModal() {
	const { movieId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const [visible, setVisible] = useState(true);
	useEffect(function() {
		dispatch(getMovie(movieId))
	}, [dispatch, movieId]);

	const {currentMovie} = useSelector((state) => ({
		currentMovie: state.movies.currentMovie,
	}));

	const setMovie = () => {
		dispatch(setCurrentMovie(null))
		history.push('/')
	}
	return (<>
		<Modal
			title={'Movie Details'}
			centered
			visible={visible}
			onCancel={() => setVisible(false)}
			footer={null}
			afterClose={() => setMovie()}
			width={1000}
		>
			{!currentMovie
				? <div style={{textAlign: 'center'}}><Spin tip="Loading..."/></div>
				: <Row gutter={15}>
					<Col span={8}>
						<Row gutter={[15, 15]}>
							<Col span={24}><img src={currentMovie.img} alt={currentMovie.alt}/></Col>
							<Col span={12}><FavoriteBtn movie={currentMovie}/></Col>
							<Col span={12}>{currentMovie.year} year</Col>
							<Col span={24}>
								{currentMovie.genres.length && currentMovie.genres.map(g => <Tag key={g}>{g}</Tag>)}
							</Col>
						</Row>
					</Col>
					<Col span={14}>
						<Title level={2}>{currentMovie.name}</Title>
						<p>{currentMovie.description}</p>
						<p><strong>Director:</strong> {currentMovie.director}</p>
						<p><strong>Starring:</strong> {currentMovie.starring.map((a, i, arr) => {
							return a + (arr.length - 1 !== i && ', ');
						})}</p>
					</Col>
				</Row>
			}
		</Modal>
	</>);
}

export { MovieModal };
