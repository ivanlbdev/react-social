import * as axios from 'axios';
import React from 'react';
import c from './Users.module.css';
import userPhoto from '../img/IMG_5761.jpg';

let Users = (props) => {
	let getUsers = () => {
		if (props.users.length === 0) {


			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
				props.setUsers(responce.data.items);
			})
		}
	}


	return (

		<div>
			<button onClick={getUsers}>Get Users</button>
			{
				props.users.map((user) => <div key={user.id}>
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