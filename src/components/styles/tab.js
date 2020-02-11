const styles = {
	light: {
		tab: {
			backgroundColor: '#ffffff',
			margin: 10,
			marginRight: 5,
			padding: 10,
			borderRadius: 5,
			marginBottom: 5,
			position: 'relative'
		},
		tabTitle: {
			border: 'none',
			backgroundColor: '#ffffff'
		},
		tabClose: {
			border: 'none',
			backgroundColor: 'inherit',
			color: '#000000'
		},
		tabList: {
			display: 'flex',
			flexDirection: 'row',
			listStyle: 'none',
			left: 0,
			backgroundColor: '#f3f3f3'
		},
		pageCommands: {
			border: 'none',
			backgroundColor: 'inherit',
			color: '#000000'
		}
	},
	dark: {
		tab: {
			backgroundColor: '#242424',
			margin: 10,
			marginRight: 5,
			padding: 10,
			borderRadius: 5,
			marginBottom: 5,
			position: 'relative'
		},
		tabTitle: {
			border: 'none',
			backgroundColor: 'inherit',
			color: '#ffffff'
		},
		tabClose: {
			border: 'none',
			backgroundColor: 'inherit',
			color: '#ffffff'
		},
		tabList: {
			display: 'flex',
			flexDirection: 'row',
			listStyle: 'none',
			left: 0,
			backgroundColor: '#1c1c1c'
		},
		pageCommands: {
			backgroundColor: 'inherit',
			color: '#ffffff',
			border: 'none'
		}
	}
};

if (localStorage.getItem('theme') === 'light') module.exports = styles.light;
if (localStorage.getItem('theme') === 'dark') module.exports = styles.dark;
//Default
if (!localStorage.getItem('theme')) module.exports = styles.light;
