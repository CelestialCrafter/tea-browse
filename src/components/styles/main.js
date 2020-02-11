const styles = {
	light: {
		appContainer: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			height: '100%'
		},
		navbarContainer: {
			flexDirection: 'column',
			backgroundColor: '#f3f3f3',
			borderBottom: '1px solid #c0c0c0'
		},
		pageCommands: {
			border: 'none',
			backgroundColor: 'inherit'
		},
		windowControlsContainer: {
			margin: 5,
			right: 0,
			top: 0,
			position: 'absolute',
			display: 'flex'
		}
	},
	dark: {}
};

module.exports = styles.light;
