import React from 'react';

import {
	IoIosClose as Close,
	IoIosMove as Drag,
	IoIosExpand as Maximize
} from 'react-icons/io';
import { MdRemove as Minimize } from 'react-icons/md';

import styles from './styles/main';
const { BrowserWindow } = window.require('electron').remote;

const maxMin = () => {
	if (BrowserWindow.getFocusedWindow().isMaximized())
		BrowserWindow.getFocusedWindow().unmaximize();
	else BrowserWindow.getFocusedWindow().maximize();
};

const WindowButtons = () => (
	<div style={styles.windowControlsContainer}>
		<div onClick={maxMin}>
			<Maximize />
		</div>

		<div onClick={() => BrowserWindow.getFocusedWindow().minimize()}>
			<Minimize />
		</div>

		<div onClick={() => BrowserWindow.getFocusedWindow().close()}>
			<Close />
		</div>

		<div style={{ WebkitAppRegion: 'drag' }}>
			<Drag />
		</div>
	</div>
);

export default WindowButtons;
