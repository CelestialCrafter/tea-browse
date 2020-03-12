import { combineReducers } from 'redux';
import cuid from 'cuid';
import { ADD_TAB, REMOVE_TAB, UPDATE_TAB } from './actions';
import listener from '../listener';

const defaultTab = {
	url: 'https://google.com',
	title: 'New Tab',
	active: true
};

const tabs = (state = [], action) => {
	const istate = Object.assign([], state);
	const currenttab = { ...defaultTab };
	switch (action.type) {
		case ADD_TAB:
			currenttab.id = cuid();
			currenttab.ref = null;
			listener.emit('switchTab', currenttab.id);

			return istate.concat([currenttab]);
			// eslint-disable-next-line
			break;
		case REMOVE_TAB:
			if (!action.id) return istate;

			console.log(
				'kaboom' + listener.emit('switchTab', istate[istate.length - 2].id)
			);
			return istate.filter((tab) => tab.id !== action.id);
			// eslint-disable-next-line
			break;
		case UPDATE_TAB:
			if (action.tab.url) currenttab.url = action.tab.url;
			if (action.tab.title) currenttab.title = action.tab.title;
			if (action.tab.ref) currenttab.ref = action.tab.ref;

			return istate.concat([currenttab]);
			// eslint-disable-next-line
			break;
		default:
			return state;
	}
};

const reducers = combineReducers({
	tabs
});

export default reducers;
