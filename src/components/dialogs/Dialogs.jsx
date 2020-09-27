import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, changeTextMessageActionCreator } from '../redux/messages-reducer';


const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsData.map((value) => <DialogItem name={value.name} id={value.id} />);
	let messegesElements = props.state.messageData.map((message) => <Message message={message.message} />)

	let newMessageElement = React.createRef();

	let changeTextMessage = () => {
		let text = newMessageElement.current.value;
		props.dispatch(changeTextMessageActionCreator(text));
	}

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}

	return (
		<div className={c.dialogs}>
			<div className={c.dialogs_items}>
				{dialogsElements}
			</div>
			<div className={c.messages}>
				{messegesElements}
				<div className={c.push_mes}>
					<textarea onChange={changeTextMessage} ref={newMessageElement} value={props.state.textMessage} placeholder="Новое сообщение" />
					<button onClick={addMessage}>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs