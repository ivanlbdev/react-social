import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, updateNewPostText, updateTextMessage } from './components/redux/state';




let renderEntrieTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				appState={state}
				addPost={addPost}
				addMessage={addMessage}
				updateNewPostText={updateNewPostText}
				updateTextMessage={updateTextMessage}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}


renderEntrieTree(state);
subscribe(renderEntrieTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();