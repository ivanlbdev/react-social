import { connect } from 'react-redux';
import { addNewMessage, changeText } from '../redux/messages-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
	return {
		dialogName: state.messagesPage.dialogsData,
		dialogMessage: state.messagesPage.messageData,
		valueText: state.messagesPage.textMessage,
		isAuth: state.auth.isAuth,
	};
};

let authRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, { addNewMessage, changeText })(authRedirectComponent);

export default DialogsContainer;