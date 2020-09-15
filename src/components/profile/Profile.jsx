import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
	return (
		<div className={c.main}>
			<ProfileInfo />
			<MyPosts
				profilePage={props.profilePage}
				dispatch={props.dispatch}
			/>
		</div>
	)
}
export default Profile;