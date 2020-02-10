const addTab = (listener) => {
	return {
		type: actions.ADD_TAB,
		listener
	};
};

const removeTab = (id) => {
	return {
		type: actions.REMOVE_TAB,
		id
	};
};

const updateTab = (id, tab) => {
	const t2r = {
		type: actions.UPDATE_TAB,
		tab: {}
	};

	if (tab.tab.url) t2r.tab.url = tab.tab.url;
	if (tab.tab.title) t2r.tab.title = tab.tab.title;
	if (tab.tab.active) t2r.tab.active = tab.tab.active;
	if (tab.tab.ref) t2r.tab.ref = tab.tab.ref;

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
