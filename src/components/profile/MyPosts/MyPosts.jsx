import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


	let postElements = props.postsData.map((post) => <Post message={post.message} likeNumber={post.likesCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}

	return (
		<div>
			<div className={c.posts}>
				<div className={c.quest}>
					<h2>Что у вас нового?</h2>
				</div>
				<div className={c.get_posts}>
					<textarea ref={newPostElement} cols="90" rows="4"></textarea>
					<button onClick={addPost}>Опубликовать</button>
				</div>
			</div>
			{postElements}
		</div>
	)
}
export default MyPosts;