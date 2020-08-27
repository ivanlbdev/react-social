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

	let postElements = postsData.map((post) => <Post message={post.message} likeNumber={post.likesCount} />)
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
			{postElements}
		</div>
	)
}
export default MyPosts;