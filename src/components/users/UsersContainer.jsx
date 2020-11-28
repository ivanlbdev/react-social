import { connect } from 'react-redux';
import { followAC, setCurrentPage, setTotalUsersCount, setUsersAC, unfollowAC } from '../redux/users-reducer';
import * as axios from 'axios';
import React from 'react';
import Users from './Users';

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
			this.props.setUsers(responce.data.items);
			let total = responce.data.totalCount;
			total < 100 ? this.props.setTotalPage(responce.data.totalCount) : this.props.setTotalPage(100)
		})
	}

	onPageChanged = (pageNamber) => {
		this.props.setPage(pageNamber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`).then(responce => {
			this.props.setUsers(responce.data.items);
		})
	}
	render() {
		return <Users totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			users={this.props.users}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setPage: (currentPage) => {
			dispatch(setCurrentPage(currentPage))
		},
		setTotalPage: (totalPage) => {
			dispatch(setTotalUsersCount(totalPage))
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);