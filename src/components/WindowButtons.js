import React from 'react';

import {
	IoIosClose as Close,
	IoIosMove as Drag,
	IoIosExpand as Maximize
} from 'react-icons/io';
import { MdRemove as Minimize } from 'react-icons/md';

import '../styles/WindowButtons.sass';
const { BrowserWindow } = window.require('electron').remote;

const maxMin = () => {
	if (BrowserWindow.getFocusedWindow().isMaximized())
		BrowserWindow.getFocusedWindow().unmaximize();
	else BrowserWindow.getFocusedWindow().maximize();
};

const WindowButtons = () => (
	<div
		className={'windowButtonsContainer'}
		style={{
			margin: 5,
			right: 0,
			top: 0,
			position: 'absolute',
			display: 'flex',
			flex: 1,
			maxWidth: '10%'
		}}
	>
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
