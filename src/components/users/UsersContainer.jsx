import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setPage, setTotalPage, toggleFetching } from '../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Loader from '../loader/Loader';
import { getUsers } from '../../api/api';

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.toggleFetching(true);
		getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleFetching(false);
			this.props.setUsers(data.items);
			let total = data.totalCount;
			total < 100 ? this.props.setTotalPage(data.totalCount) : this.props.setTotalPage(100)
		})
	}

	onPageChanged = (pageNamber) => {
		this.props.toggleFetching(true);
		this.props.setPage(pageNamber)
		getUsers(pageNamber, this.props.pageSize).then(data => {
			this.props.toggleFetching(false);
			this.props.setUsers(data.items);
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