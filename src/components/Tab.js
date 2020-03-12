import React, { useState } from 'react';
import { IconContext } from 'react-icons';

import listener from '../listener';
import styles from './styles/tab';
import { MdAutorenew as Loading } from 'react-icons/md';

const Tab = (props) => {
	const [loadingContent, setLoadingContent] = useState(null);

	listener.on('startLoad', (id) => {
		if (props.tab.id === id)
			setLoadingContent(
				<div style={{ float: 'left' }}>
					<IconContext.Provider value={{ className: 'load-spin' }}>
						<Loading />
					</IconContext.Provider>
				</div>
			);
	});

	listener.on('stopLoad', (id) => {
		if (props.tab.id === id) setLoadingContent(null);
	});

	return (
		<div style={styles.tab}>
			{loadingContent}
			<button
				style={styles.tabTitle}
				onClick={() => listener.emit('switchTab', props.tab.id)}
			>
				{props.tab.title}
			</button>
			<button
				onClick={() => props.closeTab(props.tab.id)}
				style={styles.tabClose}
			>
				x
			</button>
		</div>
	);
};

export default Tab;
