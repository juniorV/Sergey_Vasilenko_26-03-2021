import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentView } from '../../redux/reducers/movies-reducer';
import { Radio } from 'antd';
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons';

function ViewSelect(props) {
	const dispatch = useDispatch();
	const {views, currentView} = useSelector((state) => ({
		views: state.movies.views,
		currentView: state.movies.currentView,
	}));

	const onViewChange = (el) => {
		dispatch(setCurrentView(el.target.value));
	};

	const Icon = (props) => {
		if (props.view === 'list') return <BarsOutlined />;
		return <AppstoreOutlined />;
	}

	return <span style={{marginLeft: '5px'}}>
		<Radio.Group onChange={onViewChange} defaultValue={currentView}>
			{views.map(view => <Radio.Button key={view} value={view}><Icon view={view}/></Radio.Button>)}
		</Radio.Group>
	</span>;
}

export { ViewSelect };
