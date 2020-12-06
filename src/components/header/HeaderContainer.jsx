import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData, toggleFetching } from '../redux/auth-reducer';



class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.toggleFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		}).then(responce => {
			if (responce.data.resultCode === 0) {
				this.props.toggleFetching(false);
				let { id, email, login } = responce.data.data;
				this.props.setAuthUserData(id, email, login);
			}
		})
	}
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	isFetch: state.auth.isFetching,
})

export default connect(mapStateToProps, { setAuthUserData, toggleFetching })(HeaderContainer);