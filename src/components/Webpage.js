import React, { Component } from 'react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import listener from '../listener';

class Webpage extends Component {
	constructor(props) {
		super(props);

		// @TODO Set up Incognito mode (Based on the startup arguments)
		this.state = {
			flex: true,
			incognito: false
		};

		this.webview = null;
	}

	componentDidMount() {
		this.webview = document.querySelector(`.${this.props.id}`);

		listener.on('reload', () => {
			if (this.state.flex) this.webview.reload();
		});

		listener.on('loadURL', (url) => {
			if (this.state.flex) this.webview.loadURL(url);
		});

		listener.on('forward', () => {
			if (this.webview.canGoForward() && this.state.flex) {
				this.webview.goForward();
			}
		});

		listener.on('back', () => {
			if (this.webview.canGoBack() && this.state.flex) this.webview.goBack();
		});

		listener.on('switchTab', (id) => {
			if (this.props.id === id) this.setState({ flex: true });
			else this.setState({ flex: false });
		});

		this.webview.addEventListener('did-start-loading', () =>
			listener.emit('startLoad', this.props.id)
		);

		this.webview.addEventListener('did-stop-loading', () =>
			listener.emit('stopLoad', this.props.id)
		);
	}

	render() {
		// Context: style={{ display, flex: 1 }}
		// Not moved to stylesheet because `display` is dynamic
		const display = this.state.flex ? 'flex' : 'none';

		return (
			<webview
				className={this.props.id}
				src="https://google.com"
				nodeintegration="false"
				contextisolation="true"
				style={{ display, flex: 1 }}
				partition={this.state.incognito ? cuid() : 'persistent:webview'}
			>
				Failed to load Webpage, Sorry!
			</webview>
		);
	}
}

const mapStateToProps = (state) => ({
	tabs: state.tabs
});

export default connect(mapStateToProps)(Webpage);
