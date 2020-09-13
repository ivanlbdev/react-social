import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
	return (
		<div className={c.main}>
			<ProfileInfo />
			<MyPosts
				postsData={props.profilePage.postsData}
				addPost={props.addPost}
				newPostText={props.profilePage.newPostText}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	)
}
export default Profile;