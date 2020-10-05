import { combineReducers, createStore } from 'redux';
import messageReducer from './messages-reducer';
import navBarReducer from './navBar-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messageReducer,
	navBar: navBarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;