const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	postsData: [
		{ id: 1, message: 'Hello', likesCount: 12 },
		{ id: 2, message: 'how are you', likesCount: 32 },
		{ id: 3, message: 'what your name', likesCount: 1 },
		{ id: 4, message: 'mu name is blabla', likesCount: 2 },
		{ id: 5, message: 'bye', likesCount: 2 },
	],
	newPostText: '',
	profile: null,
	isFetching: false,
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
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		default:
			return state;
	}
}

export const addPost = () => {
	return {
		type: ADD_POST
	}
};
export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
};
export const updateNewPostText = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	};
};

export default profileReducer;