import React, { useEffect } from 'react';
import RBFButtons from './RBFButtons';

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
	const urlBar = React.createRef();
	const listener = props.webviewEmmiter;

	const back = () => listener.emit('back');
	const forward = () => listener.emit('forward');
	const reload = () => listener.emit('reload');

	useEffect(() => {
		urlBar.current.focus();

		urlBar.current.addEventListener('keydown', (e) => {
			if (e.keyCode !== 13) return;
			listener.emit('loadURL', urlBar.current.value);
			listener.emit('getURL');
		});
	}, []);

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
				<input style={styles.urlBar} ref={urlBar} />
			</div>
		</div>
	);
};

export default URLBar;
