const styles = {
	main: {
		urlBar: {
			margin: 10,
			marginTop: 1,
			width: '100%',
			height: '80%',
			borderRadius: 5,
			paddingLeft: 5,
			paddingRight: 5,
			border: 'none',
			outline: 'none'
		},
		urlBarContainer: {
			textAlign: 'center',
			flex: 1,
			display: 'flex'
		},
		urlContainer: {
			display: 'flex',
			flex: 1,
			textAlign: 'center',
			padding: 5
		}
	}
};

styles.light = {
	...styles.main,
	urlBar: {
		backgroundColor: '#f3f3f3'
	},
	urlContainer: {
		backgroundColor: '#ffffff'
	}
};

styles.dark = {
	...styles.main,
	urlBar: {
		...styles.main.urlBar,
		backgroundColor: '#242424',
		color: '#ffffff'
	},
	urlContainer: {
		...styles.main.urlContainer,
		backgroundColor: '#1c1c1c'
	}
};

if (localStorage.getItem('theme') === 'light') module.exports = styles.light;
if (localStorage.getItem('theme') === 'dark') module.exports = styles.dark;
//Default
if (!localStorage.getItem('theme')) module.exports = styles.light;
