import { combineReducers } from 'redux';
import { createRef } from 'react';
import { ADD_TAB, REMOVE_TAB, UPDATE_TAB } from './actions';

const defaultTab = {
	url: 'https://duckduckgo.com',
	title: 'New Tab',
	active: true
};

const tabs = (state = [], action) => {
	let istate = Object.assign([], state);
	let currenttab = defaultTab;
	switch (action.type) {
		case ADD_TAB:
			currenttab.id = action.id;
			currenttab.ref = createRef();

			istate.forEach((item, i) => {
				if (item.id === currenttab.id) return;
				istate[i].active = false;
			});

			return istate.concat([currenttab]);

			//eslint-disable-next-line
			break;

		case REMOVE_TAB:
			if (!action.id) return istate;
			return istate.filter((tab) => tab.id !== action.id);

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
