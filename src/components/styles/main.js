const styles = {
	light: {
		appContainer: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			height: '100%'
		},
		navbarContainer: {
			flexDirection: 'column'
		},
		pageCommands: {
			border: 'none',
			backgroundColor: 'inherit'
		},
		svgIcon: {
			fillWidth: '1em',
			strokeWidth: '1em'
		},
		windowControlsContainer: {
			margin: 5,
			right: 0,
			top: 0,
			position: 'absolute',
			display: 'flex'
		}
	},
	dark: {
		appContainer: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			height: '100%'
		},
		navbarContainer: {
			flexDirection: 'column'
		},
		pageCommands: {
			border: 'none',
			backgroundColor: 'inherit'
		},
		svgIcon: {
			fill: '#ffffff',
			stroke: '#ffffff',
			fillWidth: '1em',
			strokeWidth: '1em'
		},
		windowControlsContainer: {
			margin: 5,
			right: 0,
			top: 0,
			position: 'absolute',
			display: 'flex'
		}
	}
};

if (localStorage.getItem('theme') === 'light') module.exports = styles.light;
if (localStorage.getItem('theme') === 'dark') module.exports = styles.dark;
// Default
if (!localStorage.getItem('theme')) module.exports = styles.light;
