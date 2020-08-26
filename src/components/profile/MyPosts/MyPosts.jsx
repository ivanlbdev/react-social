import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	let postsData = [
		{ id: 1, message: 'Hello', likesCount: 12 },
		{ id: 2, message: 'how are you', likesCount: 32 },
		{ id: 3, message: 'what your name', likesCount: 1 },
		{ id: 4, message: 'mu name is blabla', likesCount: 2 },
		{ id: 5, message: 'bye', likesCount: 2 },
	]
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
			<Post message={postsData[0].message} likeNumber={postsData[0].likesCount} />
			<Post message={postsData[2].message} likeNumber={postsData[1].likesCount} />
		</div>
	)
}
export default MyPosts;