import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserThunk } from '../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.props.getUserThunk(this.props.match.params.userId, this.props.auth)
	};
	render() {

		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let authRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStatetoProps = (state) => ({
	profile: state.profilePage.profile,
	auth: state.auth
})

let WithUrlDataContainerComponent = withRouter(authRedirectComponent);

export default connect(mapStatetoProps, { getUserThunk })(WithUrlDataContainerComponent);