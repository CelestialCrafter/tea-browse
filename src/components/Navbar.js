import React from 'react';

import TabList from './TabList';
import WindowButtons from './WindowButtons';
import URLBar from './URLBar';
import RBFButtons from './RBFButtons';
import listener from '../listener';

const Navbar = (props) => {
	return (
		<div style={{ flexDirection: 'column' }}>
			<TabList />
			<WindowButtons />
			<RBFButtons
				back={() => listener.emit('back')}
				forward={() => listener.emit('forward')}
				reload={() => listener.emit('reload')}
			/>
			<URLBar />
		</div>
	);
};

export default Navbar;
