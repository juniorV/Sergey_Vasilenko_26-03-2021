import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';
import { removeFavoriteMovie } from '../../redux/reducers/movies-reducer';

function FavoriteList(props) {
	const { favorites } = useSelector((store) => ({ favorites: store.movies.favorites }))
	const dispatch = useDispatch();

	const removeMovie = (id) => {
		dispatch(removeFavoriteMovie(id));
	}

	return (
		<div>
			<Card title="Favorite List">
				{favorites.length ? favorites.map(m => <Row key={m.id} style={{padding: '5px 0'}} align='middle'>
					<Col span={20}>{m.name}</Col>
					<Col span={4}>
						<Button icon={<CloseOutlined />} onClick={() => removeMovie(m.id)}/>
					</Col>
				</Row>) : <div>Favorites list is empty.</div>}
			</Card>
		</div>
	)
}

export { FavoriteList };
