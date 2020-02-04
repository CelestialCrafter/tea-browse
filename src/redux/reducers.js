import { combineReducers } from 'redux';
import { ADD_TAB, REMOVE_TAB, UPDATE_TAB } from './actions';

const defaultTab = {
	url: 'https://duckduckgo.com',
	title: 'New Tab',
	active: false
};

const tabs = (state = [], action) => {
	let istate = Object.assign([], state);
	let currenttab = defaultTab;
	switch (action.type) {
		case ADD_TAB:
			if (action.tab.url) currenttab.url = action.tab.url;
			if (action.tab.title) currenttab.title = action.tab.title;
			if (action.tab.active) currenttab.active = action.tab.active;

			currenttab.id = action.tab.id;

			return istate.concat([currenttab]);
			//eslint-disable-next-line
			break;

		case REMOVE_TAB:
			if (action.id) return istate;
			return istate.filter((tab) => tab.id !== action.ic);

			//eslint-disable-next-line
			break;
		case UPDATE_TAB:
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
