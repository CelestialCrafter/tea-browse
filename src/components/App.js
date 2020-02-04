import React from 'react';
import * as EventEmmiter from 'events';

import Webpage from './Webpage';
import Navbar from './Navbar';

const listenerHost = new EventEmmiter();

const App = () => {
	//@TODO 1. Hook up Redux
	//@TODO 2. https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
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
			<Webpage navbarListener={listenerHost} />
		</div>
	);
};

export default App;
