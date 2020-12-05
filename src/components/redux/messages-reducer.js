const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messageData: [...state.messageData, { id: 6, message: state.textMessage }],
				textMessage: '',
			}
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				textMessage: action.newText,
			}
		default:
			return state;
	}
}

export const addNewMessage = () => ({ type: ADD_MESSAGE });
export const changeText = (text) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: text,
	}
};

export default messageReducer;