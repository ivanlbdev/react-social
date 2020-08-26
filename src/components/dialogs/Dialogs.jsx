import React from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	return (
		<div className={c.item + ' ' + c.active}>
			<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={c.message}>{props.message}</div>
	)
}

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

	return (
		<div className={c.dialogs}>
			<div className={c.dialogs_items}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
			</div>
			<div className={c.messages}>
				<Message message={messageData[0].message} />
				<Message message={messageData[1].message} />
				<Message message={messageData[2].message} />
			</div>
		</div>
	)
}

export default Dialogs