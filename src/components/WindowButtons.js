import React from 'react';

import Drag from './icons/Drag';
import Close from './icons/Close';
import Minimize from './icons/Minimize';
import Maximize from './icons/Maximize';

import styles from './styles/main';

const WindowButtons = () => {
	return (
		<div style={styles.windowControlsContainer}>
			<Drag />
			<Close />
			<Minimize />
			<Maximize />
		</div>
	);
};

export default WindowButtons;
