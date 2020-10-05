import { connect } from 'react-redux';
import FriendsBar from './FriendsBar';

let mapStateToProps = (state) => {
	return {
		friendsBar: state.navBar.friendsBar,
	}
}

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar);

export default FriendsBarContainer;