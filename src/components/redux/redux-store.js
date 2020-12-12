import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import messageReducer from './messages-reducer';
import navBarReducer from './navBar-reducer';
import profileReducer from './profile-reducer';
import userReducer from './users-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messageReducer,
	navBar: navBarReducer,
	usersPage: userReducer,
	auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;