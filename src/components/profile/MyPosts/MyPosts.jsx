import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
	let postElements = props.posts.map((post) => <Post message={post.message} likeNumber={post.likesCount} />)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	return (
		<div>
			<div className={c.posts}>
				<div className={c.quest}>
					<h2>Что у вас нового?</h2>
				</div>
				<div className={c.get_posts}>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
					<button onClick={onAddPost}>Опубликовать</button>
				</div>
			</div>
			{postElements}
		</div>
	)
}
export default MyPosts;