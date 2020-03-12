import React from 'react';

import styles from './styles/main';
import {
	IoIosArrowBack as Back,
	IoIosArrowForward as Forward
} from 'react-icons/io';
import { MdAutorenew as Reload } from 'react-icons/md';

const RBFButtons = (props) => (
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

export default RBFButtons;
