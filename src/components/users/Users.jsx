import React from 'react';
import c from './Users.module.css';
import userPhoto from '../img/IMG_5761.jpg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div className={c.numberBlock}>
				{
					pages.map((page) => {
						return <span className={props.currentPage === page && c.selectedPage} onClick={() => { props.onPageChanged(page) }}>{page}</span>
					})
				}
			</div>
			{
				props.users.map((user) => <div key={user.id}>
					<div className={c.user_block}>
						<div className={c.avatar}>
							<NavLink to={'/profile/' + user.id}><img src={user.photos.small != null ? user.photo.small : userPhoto} alt='text' /></NavLink>
						</div>
						<div className={c.text_content}>
							<div className={c.name_follow}>
								<div className={c.status_name}>
									<span className={c.name}>{user.name}</span>
									<span>{user.status}</span>
								</div>
								<div>
									{user.followed
										? <button onClick={() => { props.unfollow(user.id) }}>unfollow</button>
										: <button onClick={() => { props.follow(user.id) }}>follow</button>}
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

export default Users;