import React from 'react';

import TabList from './TabList';
import WindowButtons from './WindowButtons';
import URLBar from './URLBar';

import styles from './styles/main';

const Navbar = (props) => {
	return (
		<div style={styles.navbarContainer}>
			<TabList />
			<WindowButtons />
			<URLBar />
		</div>
	);
};

export default Navbar;
