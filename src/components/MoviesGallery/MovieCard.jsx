import React from 'react';
import { Card, Col } from 'antd';
import Title from 'antd/es/typography/Title';
import { NavLink } from 'react-router-dom';
import { FavoriteBtn } from '../shared/FavoriteBtn';

function MovieCard(props) {
	return <Col xs={24} sm={24} md={12} lg={8} xl={6}>
		<NavLink to={'/' + props.movie.id}>
			<Card style={{height: '100%', cursor: 'pointer'}}
				  bodyStyle={{padding: 0}}>
				<img src={props.movie.img} alt={props.movie.alt} style={{
					width: '100%',
					height: '200px',
					objectFit: 'cover',
					objectPosition: 'top',
				}}/>
				<FavoriteBtn movie={props.movie} style={{position: 'absolute', top: '10px', right: '10px'}}/>
				<div style={{padding: 15, textAlign: 'center'}}>
					<Title level={5}
						   style={{lineHeight: '1.2'}}>{props.movie.name}</Title>
					<p>{props.movie.year}</p>
				</div>
			</Card>
		</NavLink>
	</Col>;
}

export { MovieCard };
