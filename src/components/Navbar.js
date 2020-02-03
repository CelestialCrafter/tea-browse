import React from 'react';

import Tabs from './Tabs';
import WindowButtons from './WindowButtons';
import URLBar from './URLBar';

const Navbar = (props) => {
	return (
		<div
			style={{
				flexDirection: 'column',
				backgroundColor: '#f3f3f3',
				borderBottom: '1px solid #c0c0c0'
			}}
		>
			<Tabs webviewEmmiter={props.webviewEmmiter} />
			<WindowButtons />
			<URLBar webviewEmmiter={props.webviewEmmiter} />
		</div>
	);
};

export default Navbar;
