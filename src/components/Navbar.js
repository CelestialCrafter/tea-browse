import React from 'react';

import Tabs from './Tabs';
import WindowButtons from './WindowButtons';
import URLBar from './URLBar'

const Navbar = props => {
	return (
		<div style={{backgroundColor: '#f3f3f3', borderBottom: '1px solid #c0c0c0'}}>
			<Tabs />
			<WindowButtons />
			<URLBar />
		</div>
	);
}

export default Navbar;
