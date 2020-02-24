import React, { useState } from 'react';
import { connect } from 'react-redux';
import listener from '../listener';

const Webpage = (props) => {
	const generateUUID = () => {
		let dt = new Date().getTime();
		let uuid = 'xxxxxxxx-xxxx-xxxx-tuid-xxxxxxxxxxxx'.replace(/x/g, (c) => {
			let r = (dt + Math.random() * 16) % 16 | 0;
			dt = Math.floor(dt / 16);
			return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
		});
		return uuid;
	};

	const webviewRef = React.createRef();
	const [display, setDisplay] = useState('flex');

	listener.on('reload', () => {
		if (display === 'flex') webviewRef.current.reload();
	});

	listener.on('loadURL', (url) => {
		if (display === 'flex') webviewRef.current.loadURL(url);
	});

	listener.on('forward', () => {
		if (webviewRef.current.canGoForward() || display === 'flex')
			webviewRef.current.goForward();
	});

	listener.on('back', (id = 'active') => {
		if (webviewRef.current.canGoBack() || display === 'flex')
			webviewRef.current.goBack();
	});

	listener.on('switchTab', (id) => {
		if (props.id === id) setDisplay('flex');
		else setDisplay('none');
	});

	const incognito = false;
	//@TODO Set up Incognito mode (Based on the startup arguments)

	// Context: style={{ display, flex: 1 }}
	// Not moved to stylesheet because `display` is dynamic
	return (
		<webview
			ref={webviewRef}
			src="https://google.com"
			nodeintegration="false"
			contextisolation="true"
			style={{ display, flex: 1 }}
			partition={incognito ? generateUUID() : 'persistent:webview'}
		>
			Failed to load Webpage, Sorry!
		</webview>
	);
};

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs
	};
};

export default connect(mapStateToProps)(Webpage);
