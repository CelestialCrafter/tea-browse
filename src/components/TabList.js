import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Tab from './Tab';

import { addTab, removeTab } from '../redux/actions';
import styles from './styles/tab';

const { BrowserWindow } = window.require('electron').remote;

const TabList = (props) => {
	const closeTab = (id, element) => {
		props.dispatch(removeTab(id));
		console.log(props.tabs.length);
		//I dont know why 0 doesnt work, I know .length is 1 based but noone counts 0 as 1
		if (props.tabs.length === 1) BrowserWindow.getFocusedWindow().close();
	};

	//eslint-disable-next-line
	useEffect(() => props.dispatch(addTab()), []);

	return (
		<div style={styles.tabList}>
			{props.tabs.map((tab) => (
				<Tab key={tab.id} closeTab={closeTab} tab={tab} />
			))}

			<button
				style={styles.pageCommands}
				onClick={() => {
					props.dispatch(addTab());
				}}
			>
				+
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs
	};
};

export default connect(mapStateToProps)(TabList);
