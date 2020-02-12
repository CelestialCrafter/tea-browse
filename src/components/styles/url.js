const styles = {
	light: {
		urlBar: {
			backgroundColor: '#f3f3f3',
			margin: 10,
			marginTop: 1,
			width: '100%',
			height: '80%',
			borderRadius: 5,
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
			backgroundColor: '#ffffff',
			padding: 5
		}
	},
	dark: {
		urlBar: {
			backgroundColor: '#242424',
			color: '#ffffff',
			paddingLeft: 10,
			paddingRight: 10,
			margin: 10,
			marginTop: 1,
			width: '100%',
			height: '80%',
			borderRadius: 5,
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
			backgroundColor: '#1c1c1c',
			padding: 5
		}
	}
};

if (localStorage.getItem('theme') === 'light') module.exports = styles.light;
if (localStorage.getItem('theme') === 'dark') module.exports = styles.dark;
//Default
if (!localStorage.getItem('theme')) module.exports = styles.light;
