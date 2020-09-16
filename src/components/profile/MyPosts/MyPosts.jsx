import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/state';
import c from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {


	let postElements = props.profilePage.postsData.map((post) => <Post message={post.message} likeNumber={post.likesCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	}
	return (
		<div>
			<div className={c.posts}>
				<div className={c.quest}>
					<h2>Что у вас нового?</h2>
				</div>
				<div className={c.get_posts}>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} />
					<button onClick={addPost}>Опубликовать</button>
				</div>
			</div>
			{postElements}
		</div>
	)
}
export default MyPosts;