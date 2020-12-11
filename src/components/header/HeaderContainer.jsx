import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, toggleFetching } from '../redux/auth-reducer';
import { auth } from '../../api/api';



class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.toggleFetching(true);
		auth().then(data => {
			if (data.resultCode === 0) {
				this.props.toggleFetching(false);
				let { id, email, login } = data.data;
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