import React from 'react';

import { connect } from 'react-redux';
import Navbar from './Navbar';
import Webpage from './Webpage';
import { IconContext } from 'react-icons';

import '../styles/App.sass';

const App = (props) => {
	// @TODO 1. Get logo
	// @TODO 3. Update URL Bar and Title on update
	// @TODO 5. Config

	return (
		<IconContext.Provider value={{ className: 'svgIcon' }}>
			<div className={'appContainer'}>
				<Navbar />
				{props.tabs.map((tab) => (
					<Webpage id={tab.id} url={tab.url} key={tab.id} />
				))}
			</div>
		</IconContext.Provider>
	);
};

const mapStateToProps = (state) => ({
	tabs: state.tabs
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(App);
