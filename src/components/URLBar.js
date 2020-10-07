import React from 'react';
import { connect } from 'react-redux';

import listener from '../listener';
import styles from './styles/url';

const URLBar = (props) => {
	const input = React.createRef();

	const formatLink = (link) => {
		const ltr = link.indexOf('://') === -1 ? `http://${link}` : link;
		return ltr;
	};

	return (
		<div style={styles.urlContainer}>
			<div style={styles.urlBarContainer}>
				<input
					ref={input}
					style={styles.urlBar}
					className="urlBar"
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							e.target.value = formatLink(e.target.value);
							listener.emit('loadURL', formatLink(e.target.value));
						}
					}}
				/>
			</div>
		</div>
	);
};

export default connect()(URLBar);
