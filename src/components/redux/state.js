const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
			newPostText: 'Что у вас нового?',
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
			textMessage: 'Новое сообщение',
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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.postsData.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
			this._state.messagesPage.textMessage = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === ADD_MESSAGE) {
			let newMessage = {
				id: 6,
				message: this._state.messagesPage.textMessage,
			};
			this._state.messagesPage.messageData.push(newMessage);
			this._state.messagesPage.textMessage = '';
			this._callSubscriber(this._state);
		}
	}
};

export const addPostActionCreator = () => {
	return {
		type: ADD_POST
	}
};
export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	};
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const changeTextMessageActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: text,
	}
};

window.store = store;

export default store