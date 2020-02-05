import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { Provider } from 'react-redux';
import ErrorBoundary from 'react-error-boundary';

import { createStore } from 'redux';
import reducers from './redux/reducers';

const store = createStore(reducers);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
	<ErrorBoundary>
		<Provider store={store}>
			<App />
		</Provider>
	</ErrorBoundary>,
	document.getElementById('root')
);
