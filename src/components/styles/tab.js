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
			backgroundColor: 'inherit'
		},
		tabList: {
			display: 'flex',
			flexDirection: 'row',
			listStyle: 'none',
			left: 0
		},
		pageCommands: {
			border: 'none',
			backgroundColor: 'inherit'
		}
	},
	dark: {}
};

module.exports = styles.light;
