import messageReducer from "./messages-reducer";
import navBarReducer from "./navBar-reducer";
import profileReducer from "./profile-reducer";

let store = {
	_state: {
		navBar: {
			friendsBar: [
				{ name: 'Соня' },
				{ name: 'Ваня' },
				{ name: 'Саша' },
				{ name: 'Максим' },
				{ name: 'Денис' },
				{ name: 'Елена' },
				{ name: 'Дмитрий' }
			]
		},
		profilePage: {
			postsData: [
				{ id: 1, message: 'Hello', likesCount: 12 },
				{ id: 2, message: 'how are you', likesCount: 32 },
				{ id: 3, message: 'what your name', likesCount: 1 },
				{ id: 4, message: 'mu name is blabla', likesCount: 2 },
				{ id: 5, message: 'bye', likesCount: 2 },
			],
			newPostText: '',
		},
		messagesPage: {
			dialogsData: [
				{ id: 1, name: 'Сонечка' },
				{ id: 2, name: 'Ванечка' },
				{ id: 3, name: 'Санечка' },
				{ id: 4, name: 'Максимочка' },
				{ id: 5, name: 'Денисочка' },
			],
			messageData: [
				{ id: 1, message: 'Hello' },
				{ id: 2, message: 'how are you' },
				{ id: 3, message: 'what your name' },
				{ id: 4, message: 'mu name is blabla' },
				{ id: 5, message: 'bye' },
			],
			textMessage: '',
		}
	},
	_callSubscriber() {
		console.log('state was changed');
	},


	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},


	dispatch(action) { //{ type: 'ADD-POST' }
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = messageReducer(this._state.messagesPage, action);
		this._state.navBar = navBarReducer(this._state.navBar, action);

		this._callSubscriber(this._state);
	}
};


window.store = store;

export default store