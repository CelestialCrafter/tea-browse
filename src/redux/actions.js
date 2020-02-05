const generateUUID = () => {
	let dt = new Date().getTime();
	let uuid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, (c) => {
		let r = (dt + Math.random() * 16) % 16 | 0;
		dt = Math.floor(dt / 16);
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
	return uuid;
};

const addTab = () => {
	return {
		type: actions.ADD_TAB,
		id: generateUUID()
	};
};

const removeTab = (id) => {
	return {
		type: actions.REMOVE_TAB,
		id
	};
};

const updateTab = (id, tab) => {
	const t2r = {};

	if (tab.url) t2r.url = tab.url;
	if (tab.title) t2r.title = tab.title;
	if (tab.active) t2r.active = tab.active;

	return t2r;
};

const actions = {
	ADD_TAB: 'ADD_TAB',
	REMOVE_TAB: 'REMOVE_TAB',
	UPDATE_TAB: 'UPDATE_TAB',
	addTab,
	removeTab,
	updateTab
};

module.exports = actions;
