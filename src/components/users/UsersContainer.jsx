import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setPage, setTotalPage, toggleFetching } from '../redux/users-reducer';
import * as axios from 'axios';
import React from 'react';
import Users from './Users';
import Loader from '../loader/Loader';

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.toggleFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
			this.props.toggleFetching(false);
			this.props.setUsers(responce.data.items);
			let total = responce.data.totalCount;
			total < 100 ? this.props.setTotalPage(responce.data.totalCount) : this.props.setTotalPage(100)
		})
	}

	onPageChanged = (pageNamber) => {
		this.props.toggleFetching(true);
		this.props.setPage(pageNamber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`).then(responce => {
			this.props.toggleFetching(false);
			this.props.setUsers(responce.data.items);
		})
	}
	render() {
		return <>
			{this.props.isFetching ? <Loader /> : <Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
			/>}
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
};
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId))
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setPage: (currentPage) => {
// 			dispatch(setCurrentPage(currentPage))
// 		},
// 		setTotalPage: (totalPage) => {
// 			dispatch(setTotalUsersCount(totalPage))
// 		},
// 		toggleFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching))
// 		},
// 	}
// }



export default connect(mapStateToProps, { follow, unfollow, setUsers, setPage, setTotalPage, toggleFetching })(UsersAPIComponent);