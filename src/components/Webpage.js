import React, { useState } from 'react';
import { connect } from 'react-redux';
import listener from '../listener';

const Webpage = (props) => {
	const webviewRef = React.createRef();
	const [display, setDisplay] = useState('flex');

	listener.on('reload', () => webviewRef.current.reload());
	listener.on('loadURL', (url) => webviewRef.current.loadURL(url));

	listener.on('forward', () => {
		if (webviewRef.current.canGoForward()) webviewRef.current.goForward();
	});

	listener.on('back', () => {
		if (webviewRef.current.canGoBack()) webviewRef.current.goBack();
	});

	listener.on('switchTab', (id) => {
		if (props.id === id) setDisplay('flex');
		else setDisplay('none');
	});

	// Context: style={{ display, flex: 1 }}
	// Not moved to stylesheet because `display` is dynamic
	return (
		<webview
			ref={webviewRef}
			src="https://google.com"
			nodeintegration="false"
			contextisolation="true"
			style={{ display, flex: 1 }}
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
