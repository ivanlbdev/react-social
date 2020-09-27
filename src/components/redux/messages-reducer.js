const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 6,
				message: state.textMessage,
			};
			state.messageData.push(newMessage);
			state.textMessage = '';
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.textMessage = action.newText;
			return state;
		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const changeTextMessageActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: text,
	}
};

export default messageReducer;