import React from 'react';
import AvatarUser from '../../img/IMG_5761.jpg'
import Loader from '../../loader/Loader';
import c from './Profileinfo.module.css';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Loader />
	}

	return (
		<div>
			<div className={c.panorama}></div>
			<div className={c.avatar}>
				<div className={c.avatar_photo}>
					<img src={!props.profile.photos.small ? AvatarUser : props.profile.photos.small} alt="lalala" />
				</div>
			</div>
			<div className={c.name_title}>
				<h1> {props.profile.fullName} </h1>
				<p> {props.profile.aboutMe} </p>
			</div>
			<div className={c.information}>
				<div className={c.first_column}>
					<p>Ищу работу: {props.profile.lookingForAJob ? 'да' : 'нет'} </p>
					<p>Какую работу хочу: {props.profile.lookingForAJobDescription} </p>
					<p>Семейное положение: не женат</p>
				</div>
				<div className={c.second_column}>
					<p>Университет: Ярославский государственный университет им. П.Г. Демидова</p>
					<p>Место рождения: город Ярославль</p>
					<p>Семейное положение: не женат</p>
				</div>
			</div>
		</div>
	)
}
export default ProfileInfo;