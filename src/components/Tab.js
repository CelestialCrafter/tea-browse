import React from 'react';

import styles from './styles/tab';
import { updateTab } from '../redux/actions.js';

const Tab = (props) => {
	return (
		<div style={styles.tab}>
			<button
				style={styles.tabTitle}
				onClick={() =>
					props.dispatch(updateTab(props.tab.id, { active: false }))
				}
			>
				{props.tab.title}
			</button>
			<button
				onClick={() => props.closeTab(props.tab.id, props.tab.ref.current)}
				style={styles.tabClose}
			>
				x
			</button>
			{props.listener.emit('createView', props.tab.ref)}
		</div>
	);
};

export default Tab;
