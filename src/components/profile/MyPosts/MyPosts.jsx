import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			<div className={c.posts}>
				<div className={c.quest}>
					<h2>Что у вас нового?</h2>
				</div>
				<div className={c.get_posts}>
					<input type="text" />
					<button>Опубликовать</button>
				</div>
			</div>
			<Post message='Hello! how are you?' likeNumber='21' />
			<Post message='it`s my first post' likeNumber="15" />
		</div>
	)
}
export default MyPosts;