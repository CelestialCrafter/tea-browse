import React from 'react';

import listener from '../listener';
import styles from './styles/tab';

const Tab = (props) => {
	console.log(styles);
	return (
		<div style={styles.tab}>
			<button
				style={styles.tabTitle}
				onClick={() => listener.emit('switchTab', props.tab.id)}
			>
				{props.tab.title}
			</button>
			<button
				onClick={() => props.closeTab(props.tab.id)}
				style={styles.tabClose}
			>
				x
			</button>
		</div>
	);
};

export default Tab;
