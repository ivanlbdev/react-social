import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
	let dialogsElements = props.dialogName.map((value) => <DialogItem name={value.name} id={value.id} />);
	let messegesElements = props.dialogMessage.map((message) => <Message message={message.message} />)

	let newMessageElement = React.createRef();

	let changeTextMessage = () => {
		let text = newMessageElement.current.value;
		props.changeText(text);
	}

	let addMessage = () => {
		props.addNewMessage();
	}

	return (
		<div className={c.dialogs}>
			<div className={c.dialogs_items}>
				{dialogsElements}
			</div>
			<div className={c.messages}>
				{messegesElements}
				<div className={c.push_mes}>
					<textarea onChange={changeTextMessage} ref={newMessageElement} value={props.valueText} placeholder="Новое сообщение" />
					<button onClick={addMessage}>Отправить</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs