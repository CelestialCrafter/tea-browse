import React from 'react';

import Reload from './icons/Reload';
import Back from './icons/Back';
import Forward from './icons/Forward';

import styles from './styles/main';

const RBFButtons = (props) => {
	return (
		<div>
			<button onClick={props.reload} style={styles.pageCommands}>
				<Reload />
			</button>
			<button onClick={props.back} style={styles.pageCommands}>
				<Back />
			</button>
			<button onClick={props.forward} style={styles.pageCommands}>
				<Forward />
			</button>
		</div>
	);
};

export default RBFButtons;
