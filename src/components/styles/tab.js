const styles = {
	main: {
		tab: {
			margin: 10,
			marginRight: 5,
			padding: 10,
			borderRadius: 5,
			marginBottom: 5,
			position: 'relative'
		},
		tabTitle: {
			border: 'none',
			backgroundColor: 'inherit'
		},
		tabClose: {
			border: 'none',
			backgroundColor: 'inherit'
		},
		tabList: {
			display: 'flex',
			flexDirection: 'row',
			listStyle: 'none',
			left: 0
		},
		pageCommands: {
			backgroundColor: 'inherit',
			border: 'none'
		}
	}
};

styles.light = {
	...styles.main,
	tab: {
		...styles.main.tab,
		backgroundColor: '#ffffff'
	},
	tabTitle: {
		...styles.main.tabTitle,
		backgroundColor: '#ffffff'
	},
	tabClose: {
		...styles.main.tabClose,
		color: '#000000'
	},
	tabList: {
		...styles.main.tabList,
		backgroundColor: '#f3f3f3'
	},
	pageCommands: {
		...styles.main.pageCommands,
		color: '#000000'
	}
};

styles.dark = {
	...styles.main,
	tab: {
		...styles.main.tab,
		backgroundColor: '#242424'
	},
	tabTitle: {
		...styles.main.tabTitle,
		color: '#ffffff'
	},
	tabClose: {
		...styles.main.tabClose,
		color: '#ffffff'
	},
	tabList: {
		...styles.main.tabList,
		backgroundColor: '#1c1c1c'
	},
	pageCommands: {
		...styles.main.pageCommands,
		color: '#ffffff'
	}
};

if (localStorage.getItem('theme') === 'light') module.exports = styles.light;
if (localStorage.getItem('theme') === 'dark') module.exports = styles.dark;
//Default
if (!localStorage.getItem('theme')) module.exports = styles.light;
