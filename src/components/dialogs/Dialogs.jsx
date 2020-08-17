import React from 'react';
import c from './Dialogs.module.css';

const Dialogs = () => {
	return (
		<div className={c.dialogs}>
			<div className={c.dialogs_items}>
				<div className={c.item + ' ' + c.active}>
					Сонечка
				</div>
				<div className={c.item}>
					Ванечка
				</div>
				<div className={c.item}>
					Макчимочка
				</div>
				<div className={c.item}>
					Санечка
				</div>
				<div className={c.item}>
					Денисочка
				</div>
			</div>
			<div className={c.messages}>
				<div className={c.message}>Привет</div>
				<div className={c.message}>Как дела</div>
				<div className={c.message}>Что делаешь</div>
				<div className={c.message}>Да, все неплохо</div>
			</div>
		</div>
	)
}

export default Dialogs