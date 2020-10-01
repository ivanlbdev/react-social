import React from 'react';
import { addMessageActionCreator, changeTextMessageActionCreator } from '../redux/messages-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
	let state = props.store.getState();
	debugger;
	let changeTextMessage = (text) => {
		let action = changeTextMessageActionCreator(text);
		props.store.dispatch(action);
	}

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}

	return (
		<Dialogs changeText={changeTextMessage} addNewMessage={addMessage} dialogName={state.messagesPage.dialogsData} dialogMessage={state.messagesPage.messageData} valueText={state.messagesPage.textMessage} />
	)
}

export default DialogsContainer;