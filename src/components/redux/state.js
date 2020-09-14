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
			newPostText: '1234',
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
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('state was changed');
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.postsData.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	updateTextMessage(newText) {
		this._state.messagesPage.textMessage = newText;
		this._callSubscriber(this._state);
	},
	addMessage() {
		let newMessage = {
			id: 6,
			message: this._state.messagesPage.textMessage,
		};
		this._state.messagesPage.messageData.push(newMessage);
		this._state.messagesPage.textMessage = '';
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
}



window.store = store;

export default store