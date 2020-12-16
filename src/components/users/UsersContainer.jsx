import { connect } from 'react-redux';
import { followThunk, unFollowThunk, setUsers, setPage, getUserThunkCreator, setCurentPageThunk } from '../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Loader from '../loader/Loader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNamber) => {
		this.props.setCurentPageThunk(pageNamber, this.props.pageSize);
	}
	render() {
		return <>
			{this.props.isFetching ? <Loader /> : <Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				unfollow={this.props.unFollowThunk}
				follow={this.props.followThunk}
				isProgress={this.props.isProgress}
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
		isProgress: state.usersPage.followingInProgress,
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

let withRedirect = withAuthRedirect(UsersAPIComponent)


export default connect(mapStateToProps, { followThunk, unFollowThunk, setUsers, setPage, getUserThunkCreator, setCurentPageThunk })(withRedirect);