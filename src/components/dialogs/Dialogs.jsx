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
	return (
		<div className={c.dialogs}>
			<div className={c.dialogs_items}>
				<DialogItem name='Сонечка' id='1' />
				<DialogItem name='Ванечка' id='2' />
				<DialogItem name='Санечка' id='3' />
				<DialogItem name='Максимочка' id='4' />
				<DialogItem name='Денисочка' id='5' />
			</div>
			<div className={c.messages}>
				<Message message="Hello" />
				<Message message="you" />
				<Message message="Как дела?" />
			</div>
		</div>
	)
}

export default Dialogs