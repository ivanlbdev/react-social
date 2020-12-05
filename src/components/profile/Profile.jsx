import React from 'react';
import c from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
	return (
		<div className={c.main}>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</div>
	)
}
export default Profile;