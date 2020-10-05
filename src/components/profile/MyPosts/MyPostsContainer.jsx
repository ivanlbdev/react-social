import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';



let mapToStateToProps = (state) => {
	return {
		posts: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextActionCreator(text));
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		}
	}
}

const MyPostsContainer = connect(mapToStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;