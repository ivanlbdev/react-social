import React from 'react';
import { connect } from 'react-redux';
import FriendsBar from './FriendsBar';

let mapStateToProps = (state) => {
	return {
		state: state,
	}
}

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar);

export default FriendsBarContainer;