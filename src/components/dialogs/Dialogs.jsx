import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = () => {

	let dialogsData = [
		{ id: 1, name: 'Сонечка' },
		{ id: 2, name: 'Ванечка' },
		{ id: 3, name: 'Санечка' },
		{ id: 4, name: 'Максимочка' },
		{ id: 5, name: 'Денисочка' },
	]

	let messageData = [
		{ id: 1, message: 'Hello' },
		{ id: 2, message: 'how are you' },
		{ id: 3, message: 'what your name' },
		{ id: 4, message: 'mu name is blabla' },
		{ id: 5, message: 'bye' },
	]

	let dialogsElements = dialogsData.map((value) => <DialogItem name={value.name} id={value.id} />);
	let messegesElements = messageData.map((message) => <Message message={message.message} />)

	return (
		<div className={c.dialogs}>
			<div className={c.dialogs_items}>
				{dialogsElements}
			</div>
			<div className={c.messages}>
				{messegesElements}
			</div>
		</div>
	)
}

export default Dialogs