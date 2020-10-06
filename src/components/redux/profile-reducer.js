const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postsData: [
		{ id: 1, message: 'Hello', likesCount: 12 },
		{ id: 2, message: 'how are you', likesCount: 32 },
		{ id: 3, message: 'what your name', likesCount: 1 },
		{ id: 4, message: 'mu name is blabla', likesCount: 2 },
		{ id: 5, message: 'bye', likesCount: 2 },
	],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				postsData: [...state.postsData, { id: 5, message: state.newPostText, likesCount: 0 }],
				newPostText: '',
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}
		default:
			return state;
	}
}

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

export default profileReducer;