import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Tab from './Tab';

import { addTab, removeTab } from '../redux/actions';
import styles from './styles/tab';

const { BrowserWindow } = window.require('electron').remote;

const TabList = (props) => {
	const closeTab = (id, element) => {
		props.dispatch(removeTab(id));

		// I dont know why 0 doesnt work, 1 works so i guess we are going with 1
		if (props.tabs.length === 1) BrowserWindow.getFocusedWindow().close();
	};

	useEffect(() => {
		props.dispatch(addTab());
		// eslint-disable-next-line
	}, []);

	return (
		<div style={styles.tabList}>
			{props.tabs.map((tab) => (
				<Tab key={tab.id} closeTab={closeTab} tab={tab} />
			))}

			<button
				style={{ ...styles.pageCommands }}
				onClick={() => {
					props.dispatch(addTab());
					props.dispatch(addTab());
					props.dispatch(addTab());
					props.dispatch(addTab());
					props.dispatch(addTab());
					props.dispatch(addTab());
					props.dispatch(addTab());
					props.dispatch(addTab());
					props.dispatch(addTab());
					props.dispatch(addTab());
				}}
			>
				+
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	tabs: state.tabs
});

export default connect(mapStateToProps)(TabList);
