import React from 'react';

import Navbar from './Navbar';
import Webpage from './Webpage';

import { connect } from 'react-redux';

const App = (props) => {
	//@TODO 1. Get logo
	//@TODO 2. Hook up that logger thing rexo mentioned
	//@TODO 3. Update URL Bar and Title on update
	//@TODO 4. Styles
	//@TODO 5. Config

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '100%'
			}}
		>
			<Navbar />
			{props.tabs.map((tab) => {
				return <Webpage id={tab.id} key={tab.id} />;
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs
	};
};

export default connect(mapStateToProps, null, null, { forwardRef: true })(App);
