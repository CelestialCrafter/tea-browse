import React, { useState } from 'react';
import RBFButtons from './RBFButtons';

import { connect } from 'react-redux';
import listener from '../listener';

const styles = {
	urlBar: {
		backgroundColor: '#f3f3f3',
		margin: 10,
		marginTop: 1,
		width: '100%',
		height: '80%',
		borderRadius: 5,
		border: 'none',
		outline: 'none'
	},
	urlBarContainer: { textAlign: 'center', flex: 1, display: 'flex' }
};

const URLBar = (props) => {
	const [url, setUrl] = useState('');

	const back = () => listener.emit('back');
	const forward = () => listener.emit('forward');
	const reload = () => listener.emit('reload');

	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				textAlign: 'center',
				backgroundColor: '#ffffff',
				padding: 5
			}}
		>
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
