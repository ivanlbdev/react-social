import React from 'react';
import StoreContext from '../../StoreContext';
import { addMessageActionCreator, changeTextMessageActionCreator } from '../redux/messages-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					let changeTextMessage = (text) => {
						let action = changeTextMessageActionCreator(text);
						store.dispatch(action);
					}

					let addMessage = () => {
						store.dispatch(addMessageActionCreator());
					}
					return <Dialogs changeText={changeTextMessage} addNewMessage={addMessage} dialogName={state.messagesPage.dialogsData} dialogMessage={state.messagesPage.messageData} valueText={state.messagesPage.textMessage} />
				}
			}
		</StoreContext.Consumer>
	)
}

export default DialogsContainer;