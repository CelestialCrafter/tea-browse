import React from 'react';

import styles from './styles/tab';
import listener from '../listener';

const Tab = (props) => {
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
