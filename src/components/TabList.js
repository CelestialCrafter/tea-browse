import React from 'react';
import { connect } from 'react-redux';

import Tab from './Tab';
import TabCloseAnimation from './TabCloseAnimation';

import { ADD_TAB } from '../redux/actions';
import styles from './styles/tab';

const TabList = (props) => {
	const closeTab = (id, ref) => {
		new TabCloseAnimation(ref.current);
	};

	const generateUUID = () => {
		let dt = new Date().getTime();
		let uuid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, (c) => {
			let r = (dt + Math.random() * 16) % 16 | 0;
			dt = Math.floor(dt / 16);
			return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
		});
		return uuid;
	};

	return (
		<div style={styles.tabList}>
			{props.tabs.map((tab) => (
				<Tab key={tab.id} closeTab={closeTab} tab={tab} />
			))}

			<button
				style={{ border: 'none', backgroundColor: 'inherit' }}
				onClick={() => {
					props.dispatch({
						type: ADD_TAB,
						tab: {
							id: generateUUID()
						}
					});
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
