import { connect } from 'react-redux';
import { addNewMessage, changeText } from '../redux/messages-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
	return {
		dialogName: state.messagesPage.dialogsData,
		dialogMessage: state.messagesPage.messageData,
		valueText: state.messagesPage.textMessage,
	};
};



const DialogsContainer = connect(mapStateToProps, { addNewMessage, changeText })(Dialogs);

export default DialogsContainer;