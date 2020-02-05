//eslint-disable
import React from 'react';
import * as EventEmmiter from 'events';

import Navbar from './Navbar';

import Webpage from './Webpage';
import { connect } from 'react-redux';

const listenerHost = new EventEmmiter();

const App = (props) => {
	//@TODO 3. Hook up that logger thing rexo mentioned
	//@TODO 4. Add active tabs
	//@TODO 5. Different webviews for different tabs
	//@TODO 6. Update URL Bar and Title on update

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '100%'
			}}
		>
			<Navbar webviewEmmiter={listenerHost} />
			{props.tabs.forEach((tab) => (
				<Webpage navbarListener={listenerHost} refr={tab.ref} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs
	};
};

export default connect(mapStateToProps)(App);
