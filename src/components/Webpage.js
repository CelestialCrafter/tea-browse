import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import listener from '../listener';

const Webpage = (props) => {
	const webviewRef = React.createRef();
	let webview = webviewRef;

	listener.on('reload', () => {
		if (props.tabs.find((tab) => tab.id === props.id).active) webview.reload();
	});

	listener.on('loadURL', (url) => {
		if (props.tabs.find((tab) => tab.id === props.id).active)
			webview.loadURL(url);
	});

	listener.on('getURL', () => {
		if (props.tabs.find((tab) => tab.id === props.id).active)
			listener.emit('returnURL', webview.getURL());
	});

	listener.on('forward', () => {
		if (
			webview.canGoForward() &&
			props.tabs.find((tab) => tab.id === props.id).active
		)
			webview.goForward();
	});

	listener.on('back', () => {
		if (
			webview.canGoBack() &&
			props.tabs.find((tab) => tab.id === props.id).active
		)
			webview.goBack();
	});

	listener.on('switchTab', (id) => {
		console.log(webview);
		if (props.id === id) webview.style.display = 'flex';
		else webview.style.display = 'none';
	});

	useEffect(() => listener.emit('switchTab', props.id));
	useEffect(() => {
		webview = webviewRef.current;
	}, [webviewRef]);

	return (
		<webview
			ref={webviewRef}
			src="https://github.com"
			nodeintegration="false"
			contextisolation="true"
			style={{ display: 'flex', flex: 1 }}
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
