import React from 'react';
import styles from './styles/tab';

const Tab = (props) => {
	return (
		<div ref={props.tab.ref} style={styles.tab}>
			{console.log(props)}
			<button style={styles.tabTitle}>{props.tab.title}</button>
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
