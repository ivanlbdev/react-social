import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../api/api';

class ProfileContainer extends React.Component {
	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			this.props.auth.isAuth ? userId = this.props.auth.userId : userId = 1;
		}
		getProfile(userId).then(data => {
			this.props.setUserProfile(data);
		})
	};
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let mapStatetoProps = (state) => ({
	profile: state.profilePage.profile,
	auth: state.auth,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStatetoProps, { setUserProfile })(WithUrlDataContainerComponent);