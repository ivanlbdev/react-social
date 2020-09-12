import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsData.map((value) => <DialogItem name={value.name} id={value.id} />);
	let messegesElements = props.state.messageData.map((message) => <Message message={message.message} />)

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