import { combineReducers } from 'redux';
import { ADD_TAB, REMOVE_TAB, UPDATE_TAB, GET_TAB } from './actions';

let nextTabId = 0;
const defaultTab = {
	url: 'https://duckduckgo.com',
	title: 'New Tab',
	id: 0,
	active: false
};

const tabs = (state = [], action) => {
	const istate = Object.assign({}, defaultTab);

	switch (action.type) {
		case ADD_TAB:
			if (action.tab.url) istate.url = action.tab.url;
			if (action.tab.title) istate.title = action.tab.title;
			if (action.tab.active) istate.active = action.tab.active;

			return istate;
			//eslint-disable-next-line
			break;
		default:
			return state;
	}
};

const reducers = combineReducers({
	tabs
});

export default reducers;
