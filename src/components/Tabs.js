import React, { useState, useEffect } from 'react';

const { BrowserWindow } = window.require('electron').remote;

const Tabs = (props) => {
	const defaultTab = {
		url: 'https://duckduckgo.com',
		title: 'New Tab',
		id: 0
	};

	const [idSpec, setIdSpec] = useState(0);
	const [tabRefs, setTabRefs] = useState([]);
	const [tabs, setTabs] = useState([]);
	const listener = props.webviewEmmiter;

	const styles = {
		tabList: {
			display: 'flex',
			flexDirection: 'row',
			listStyle: 'none',
			left: 0
		},
		tab: {
			backgroundColor: '#ffffff',
			margin: 10,
			marginRight: 5,
			padding: 10,
			borderRadius: 5,
			marginBottom: 5,
			position: 'relative'
		},
		tabTitle: { border: 'none', backgroundColor: '#ffffff' },
		tabClose: { border: 'none', backgroundColor: 'inherit' }
	};

	useEffect(() => {
		setIdSpec((pid) => {
			return pid + 1;
		});
	}, []);

	listener.on('returnURL', (title) => {
		setTabs((prevTabs) => {
			let ptabs = [...prevTabs];
			ptabs[0].title = title;
			return ptabs;
		});
	});

	const addTab = () => {
		setTabs((prevTabs) => {
			return prevTabs.concat([
				{ ...defaultTab, id: idSpec, title: 'New Tab ' + idSpec }
			]);
		});

		setTabRefs((prevTabRefs) => {
			return prevTabRefs.concat([{ ref: React.createRef(), id: idSpec }]);
		});

		setIdSpec((prevSpec) => {
			return prevSpec + 1;
		});
	};

	const closeTab = (id) => {
		const tab = tabRefs[id].current;
		let width = tab.offsetWidth;
		let pos = 10;

		const frame = () => {
			if (pos === 0) {
				clearInterval(animation);
				setTabs((prevTabs) => {
					//Tab in this context refers to the Filter's tab, not the tab up on the start of the function
					return prevTabs.filter((tab) => tab.id !== id);
				});

				setTabRefs((prevRefs) => {
					return prevRefs.filter((ref) => ref.id !== id);
				});
			} else {
				tab.style.left = tab.style.left - width / 10 + 'px';
				pos--;
			}
		};

		const animation = setInterval(frame, 1);

		if (tabs.length === 0) BrowserWindow.getFocusedWindow().close();
	};

	return (
		<div style={styles.tabList}>
			{tabs.map((tab) => (
				<div
					key={tab.id}
					ref={tabRefs[tab.id].ref}
					style={styles.tab}
					className={'tab tab' + idSpec}
				>
					<button style={styles.tabTitle}>{tab.title}</button>
					<button onClick={() => closeTab(tab.id)} style={styles.tabClose}>
						x
					</button>
				</div>
			))}
			<button
				onClick={addTab}
				style={{ border: 'none', backgroundColor: 'inherit' }}
			>
				+
			</button>
		</div>
	);
};

export default Tabs;
