import { connect } from 'react-redux';
import { addMessageActionCreator, changeTextMessageActionCreator } from '../redux/messages-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
	return {
		dialogName: state.messagesPage.dialogsData,
		dialogMessage: state.messagesPage.messageData,
		valueText: state.messagesPage.textMessage,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		changeText: (text) => {
			dispatch(changeTextMessageActionCreator(text));
		},
		addNewMessage: () => {
			dispatch(addMessageActionCreator());
		},

	};
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;