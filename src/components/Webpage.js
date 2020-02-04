import React from 'react';

const Webpage = (props) => {
	const listener = props.navbarListener;
	const webviewRef = React.createRef();

	const webview = webviewRef.current;

	listener.on('reload', () => webview.reload());
	listener.on('loadURL', (url) => webview.loadURL(url));

	listener.on('forward', () => {
		if (webview.canGoForward()) webview.goForward();
	});
	listener.on('back', () => {
		if (webview.canGoBack()) webview.goBack();
	});

	listener.on('getURL', () => {
		listener.emit('returnURL', webview.getURL());
	});

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

export default Webpage;
