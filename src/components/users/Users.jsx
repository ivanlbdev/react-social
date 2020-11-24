import * as axios from 'axios';
import React from 'react';
import c from './Users.module.css';
import userPhoto from '../img/IMG_5761.jpg';

class Users extends React.Component {
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
		let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}
		return (

			<div>
				<div className={c.numberBlock}>
					{
						pages.map((page) => {
							return <span className={this.props.currentPage === page && c.selectedPage} onClick={() => { this.onPageChanged(page) }}>{page}</span>
						})
					}
				</div>
				{
					this.props.users.map((user) => <div key={user.id}>
						<div className={c.user_block}>
							<div className={c.avatar}>
								<img src={user.photos.small != null ? user.photo.small : userPhoto} alt='text' />
							</div>
							<div className={c.text_content}>
								<div className={c.name_follow}>
									<div className={c.status_name}>
										<span className={c.name}>{user.name}</span>
										<span>{user.status}</span>
									</div>
									<div>
										{user.followed
											? <button onClick={() => { this.props.unfollow(user.id) }}>unfollow</button>
											: <button onClick={() => { this.props.follow(user.id) }}>follow</button>}
									</div>
								</div>
								<div className={c.location}>
									<span>{'user.location.city'}</span>
									<span>{'user.location.country'}</span>
								</div>
							</div>
						</div>
					</div>
					)
				}

				<div className={c.show}>
					<button>Покажи еще</button>
				</div>
			</div >
		)
	}
}

export default Users;