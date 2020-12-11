import * as axios from 'axios';


const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'd771b3d8-5994-4a86-8e85-85a404056f89',
	}
})

export const getUsers = (currentPage, pageSize) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true, }).then(responce => responce.data);
}

export const follow = (userId) => {
	return instance.post(`follow/${userId}`, {})
}

export const unfollow = (userId) => {
	return instance.delete(`follow/${userId}`);
}

export const auth = () => {
	return instance.get(`auth/me`).then(responce => responce.data);
}

export const getProfile = (userId) => {
	return instance.get(`profile/${userId}`).then(responce => responce.data)
}
