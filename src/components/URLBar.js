import React, { useState } from 'react';
import RBFButtons from './RBFButtons';

import { connect } from 'react-redux';
import listener from '../listener';
import styles from './styles/url';

const URLBar = (props) => {
	const [url, setUrl] = useState('');

	const back = () => listener.emit('back');
	const forward = () => listener.emit('forward');
	const reload = () => listener.emit('reload');

	return (
		<div style={styles.urlContainer}>
			<RBFButtons back={back} forward={forward} reload={reload} />
			<div style={styles.urlBarContainer}>
				<input
					style={styles.urlBar}
					onChange={(e) => setUrl(e.target.value)}
					onKeyPress={(e) => {
						if (e.key === 'Enter') listener.emit('loadURL', url);
					}}
				/>
			</div>
		</div>
	);
};

export default connect()(URLBar);
