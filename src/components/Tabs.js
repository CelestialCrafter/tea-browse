import React, { useState, useEffect } from 'react';
const {BrowserWindow} = window.require('electron').remote;

const Tabs = props => {
	const defaultTab = {
		url: 'https://duckduckgo.com',
		title: 'New Tab',
		id: 0
	};

	const [idSpec, setIdSpec] = useState(0);
	const [tabs, setTabs] = useState([defaultTab]);
	const styles = {
		tabList: {display: 'flex', flexDirection: 'row', listStyle: 'none', left: 0},
		tab: {backgroundColor: '#ffffff', margin: 10, marginRight: 5, padding: 10, borderRadius: 5, marginBottom: 5},
		tabTitle: {border: 'none', backgroundColor: '#ffffff'},
		tabClose: {border: 'none', backgroundColor: 'inherit'}
	}

	useEffect(() => {
		setIdSpec(pid => {
			return pid + 1;
		});
	}, []);

	const addTab = () => {
		setTabs(prevTabs => {
			return prevTabs.concat([{...defaultTab, id: idSpec, title: 'New Tab ' + idSpec}]);
		});
		setIdSpec(prevSpec => {return prevSpec + 1});
	};

	const closeTab = (id) => {
		setTabs(prevTabs => {
			return prevTabs.filter((tab) => tab.id !== id);
		});

		if (tabs.length === 0) BrowserWindow.getFocusedWindow().close();
	};

  return (
		<div style={styles.tabList}>
			{tabs.map((tab) => (
				<div key={tab.id} style={styles.tab} className={'tab tab' + idSpec}>
					<button style={styles.tabTitle}>{tab.title}</button>
					<button onClick={() => closeTab(tab.id)} style={styles.tabClose}>x</button>
				</div>
			))}
			<button onClick={addTab} style={{border: 'none', backgroundColor: 'inherit'}}>+</button>
		</div>
  );
};

export default Tabs;
