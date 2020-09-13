import { renderEntrieTree } from "../../render";

let state = {
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
};

window.state = state;

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};
	state.profilePage.postsData.push(newPost);
	state.profilePage.newPostText = '';
	renderEntrieTree(state);
};

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	renderEntrieTree(state);
};

export let updateTextMessage = (newText) => {
	state.messagesPage.textMessage = newText;
	renderEntrieTree(state);
}

export let addMessage = () => {
	let newMessage = {
		id: 6,
		message: state.messagesPage.textMessage,
	};
	state.messagesPage.messageData.push(newMessage);
	state.messagesPage.textMessage = '';
	renderEntrieTree(state);
}

export default state