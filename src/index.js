import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/redux-store';




let renderEntrieTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				store={store}
				appState={state}
				dispatch={store.dispatch.bind(store)}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}


renderEntrieTree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	renderEntrieTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();