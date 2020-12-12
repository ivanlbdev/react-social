import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserThunk } from '../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		this.props.getUserThunk(this.props.match.params.userId, this.props.auth)
	};
	render() {
		if (!this.props.auth.isAuth) return <Redirect to={'/login'} />;
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

export default connect(mapStatetoProps, { getUserThunk })(WithUrlDataContainerComponent);