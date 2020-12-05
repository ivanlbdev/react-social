import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';



let mapToStateToProps = (state) => {
	return {
		posts: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	}
}



const MyPostsContainer = connect(mapToStateToProps, { addPost, updateNewPostText })(MyPosts);

export default MyPostsContainer;