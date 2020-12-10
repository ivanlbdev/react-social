import React from 'react';
import c from './Users.module.css';
import userPhoto from '../img/IMG_5761.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
										? <button onClick={() => {

											axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
												withCredentials: true,
												headers: {
													'API-KEY': 'd771b3d8-5994-4a86-8e85-85a404056f89'
												}
											}).then(responce => {
												if (responce.data.resultCode === 0) {
													props.unfollow(user.id)
												}
											})

										}}>unfollow</button>
										: <button onClick={() => {
											axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
												withCredentials: true,
												headers: {
													'API-KEY': 'd771b3d8-5994-4a86-8e85-85a404056f89'
												}
											}).then(responce => {
												if (responce.data.resultCode === 0) {
													props.follow(user.id)
												}
											})

										}}>follow</button>}
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