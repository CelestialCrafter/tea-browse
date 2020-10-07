const styles = {
	main: {
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
			fillWidth: 0,
			strokeWidth: 0
		},
		windowControlsContainer: {
			margin: 5,
			right: 0,
			top: 0,
			position: 'absolute',
			display: 'flex',
			flex: 1,
			maxWidth: '10%'
		}
	}
};

styles.light = {
	...styles.main,
	svgIcon: {
		...styles.main.svgIcon,
		fill: '#000000',
		stroke: '#000000'
	}
};

styles.dark = {
	...styles.main,
	svgIcon: {
		...styles.main.svgIcon,
		fill: '#ffffff',
		stroke: '#ffffff'
	}
};

if (localStorage.getItem('theme') === 'light') module.exports = styles.light;
if (localStorage.getItem('theme') === 'dark') module.exports = styles.dark;
// Default
if (!localStorage.getItem('theme')) module.exports = styles.light;
