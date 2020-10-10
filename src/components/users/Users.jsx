import React from 'react';
import c from './Users.module.css';

let Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers(
			[
				{ id: 1, photoUrl: 'https://img1.goodfon.ru/wallpaper/nbig/f/12/obezyana-obezyanka-mordochka.jpg', followed: true, fullName: 'Ivan', status: 'i am a boss', location: { city: 'Yaroslavl', country: 'Russia' } },
				{ id: 2, photoUrl: 'https://img1.goodfon.ru/wallpaper/nbig/f/12/obezyana-obezyanka-mordochka.jpg', followed: false, fullName: 'Sonya', status: 'i am Sonya', location: { city: 'Yaroslavl', country: 'Russia' } },
				{ id: 3, photoUrl: 'https://img1.goodfon.ru/wallpaper/nbig/f/12/obezyana-obezyanka-mordochka.jpg', followed: false, fullName: 'Max', status: 'Ty loh', location: { city: 'Yaroslavl', country: 'Russia' } },
				{ id: 4, photoUrl: 'https://img1.goodfon.ru/wallpaper/nbig/f/12/obezyana-obezyanka-mordochka.jpg', followed: true, fullName: 'Sanek', status: 'i am a boss too', location: { city: 'Yaroslavl', country: 'Russia' } },
			]
		)
	}

	return (
		<div>
			{
				props.users.map((user) => <div key={user.id}>
					<div className={c.user_block}>
						<div className={c.avatar}>
							<img src={user.photoUrl} alt='text' />
						</div>
						<div className={c.text_content}>
							<div className={c.name_follow}>
								<div className={c.status_name}>
									<span className={c.name}>{user.fullName}</span>
									<span>{user.status}</span>
								</div>
								<div>
									{user.followed
										? <button onClick={() => { props.unfollow(user.id) }}>unfollow</button>
										: <button onClick={() => { props.follow(user.id) }}>follow</button>}
								</div>
							</div>
							<div className={c.location}>
								<span>{user.location.city}</span>
								<span>{user.location.country}</span>
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