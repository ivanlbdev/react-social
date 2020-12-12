import { follow, getUsers, unfollow } from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS';

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					}
					return user;
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					}
					return user;
				})
			}
		}
		case SET_USERS: {
			return {
				...state, users: action.users
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state, currentPage: action.currentPage,
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state, totalUsersCount: action.totalPage,
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state, isFetching: action.isFetching,
			}
		}
		case FOLLOW_IN_PROGRESS: {
			return {
				...state,
				followingInProgress:
					action.isProgress ?
						[...state.followingInProgress, action.userId]
						: state.followingInProgress.filter(id => id !== action.userId)
			}
		}
		default:
			return state;
	}
}

export const followSec = (userId) => ({ type: FOLLOW, userId });
export const unfollowSec = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalPage = (totalPage) => ({ type: SET_TOTAL_USERS_COUNT, totalPage });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const followingProgress = (isProgress, userId) => ({ type: FOLLOW_IN_PROGRESS, isProgress, userId })

export const getUserThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleFetching(true));
		getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleFetching(false));
			dispatch(setUsers(data.items));
			let total = data.totalCount;
			total < 100 ? dispatch(setTotalPage(data.totalCount)) : dispatch(setTotalPage(100))
		})
	}
}

export const setCurentPageThunk = (pageNamber, pageSize) => {
	return (dispatch) => {
		dispatch(getUserThunkCreator(pageNamber, pageSize));
		dispatch(toggleFetching(true));
		dispatch(setPage(pageNamber));
		getUsers(pageNamber, pageSize).then(data => {
			dispatch(toggleFetching(false));
			dispatch(setUsers(data.items));
		})
	}
}

export const followThunk = (userId) => {
	return (dispatch) => {
		dispatch(followingProgress(true, userId));
		follow(userId).then(responce => {
			if (responce.data.resultCode === 0) {
				dispatch(followSec(userId));
			}
			dispatch(followingProgress(false, userId));
		})
	}
}

export const unFollowThunk = (userId) => {
	return (dispatch) => {
		dispatch(followingProgress(true, userId));
		unfollow(userId).then(responce => {
			if (responce.data.resultCode === 0) {
				dispatch(unfollowSec(userId));
			}
			dispatch(followingProgress(false, userId));
		})
	}
}

export default userReducer;