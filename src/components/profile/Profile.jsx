import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = () => {
	return (
		<div className={c.main}>
			<ProfileInfo />
			<MyPosts />
		</div>
	)
}
export default Profile;