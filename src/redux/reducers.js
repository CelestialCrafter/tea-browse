import { combineReducers } from 'redux';
import { ADD_TAB, REMOVE_TAB, UPDATE_TAB } from './actions';
import listener from '../listener';

const defaultTab = {
	url: 'https://google.com',
	title: 'New Tab',
	active: true
};

const generateUUID = () => {
	let dt = new Date().getTime();
	let uuid = 'xxxxxxxx-xxxx-xxxx-tuid-xxxxxxxxxxxx'.replace(/x/g, (c) => {
		let r = (dt + Math.random() * 16) % 16 | 0;
		dt = Math.floor(dt / 16);
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
	return uuid;
};

const tabs = (state = [], action) => {
	let istate = Object.assign([], state);
	let currenttab = Object.assign({}, defaultTab);
	switch (action.type) {
		case ADD_TAB:
			currenttab.id = generateUUID();
			currenttab.ref = null;
			listener.emit('switchTab', currenttab.id);

			return istate.concat([currenttab]);
			//eslint-disable-next-line
			break;
		case REMOVE_TAB:
			if (!action.id) return istate;

			return istate.filter((tab) => tab.id !== action.id);
			//eslint-disable-next-line
			break;
		case UPDATE_TAB:
			if (action.tab.url) currenttab.url = action.tab.url;
			if (action.tab.title) currenttab.title = action.tab.title;
			if (action.tab.ref) currenttab.ref = action.tab.ref;

			return istate.concat([currenttab]);
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
