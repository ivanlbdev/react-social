import React from 'react';
import AvatarUser from '../img/IMG_5761.jpg'
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div className={c.main}>
			<div className={c.panorama}></div>
			<div className={c.avatar}>
				<div className={c.avatar_photo}>
					<img src={AvatarUser} alt="lalala" />
				</div>
			</div>
			<div className={c.name_title}>
				<h1>My Name</h1>
			</div>
			<div className={c.information}>
				<div className={c.first_column}>
					<p>Дата рождения: 01.01.2201</p>
					<p>Место рождения: город Ярославль</p>
					<p>Семейное положение: не женат</p>
				</div>
				<div className={c.second_column}>
					<p>Университет: Ярославский государственный университет им. П.Г. Демидова</p>
					<p>Место рождения: город Ярославль</p>
					<p>Семейное положение: не женат</p>
				</div>
			</div>
			<MyPosts />
		</div>
	)
}
export default Profile;