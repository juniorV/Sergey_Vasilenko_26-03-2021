import React from 'react';
import { Card, Col, Row, Tag } from 'antd';
import { NavLink } from 'react-router-dom';

import { Typography } from 'antd';
import { FavoriteBtn } from '../shared/FavoriteBtn';
const { Title, Paragraph } = Typography;

function MovieListItem(props) {
	return <Col span={24}>
		<NavLink to={'/' + props.movie.id}>
			<Card style={{height: '100%', cursor: 'pointer'}} bodyStyle={{padding: 15}}>
				<Row gutter={[15, 15]}>
					<Col span={6} style={{textAlign: 'center'}}>
						<img src={props.movie.img} alt={props.movie.alt} style={{
							maxHeight: '150px',
							objectFit: 'top',
							objectPosition: 'center',
						}}/>
					</Col>
					<Col span={18}>
						<Row gutter={[15, 5]}>
							<Col span={10} xs={20} md={14}>
								<Title level={5} style={{lineHeight: '1.2'}}>{props.movie.name}</Title>
							</Col>
							<Col span={10} xs={20} md={6}>
								<Paragraph>{props.movie.year} year</Paragraph>
							</Col>
							<FavoriteBtn movie={props.movie} style={{position: 'absolute', top: 0, right: '5px'}}/>
						</Row>
						<Paragraph ellipsis={true}>{props.movie.description}</Paragraph>
						<div>
							{props.movie.genres.length && props.movie.genres.map(g => <Tag key={g} style={{marginBottom: '5px'}}>{g}</Tag>)}
						</div>
					</Col>
				</Row>
			</Card>
		</NavLink>
	</Col>
}

export { MovieListItem };
