import React from 'react';
import c from './FriendsCard.module.css';

const FriendsCard = (props) => {
	return (
		<div className={c.friend}>
			<div className={c.avatar}></div>
			<div className={c.name}>
				{props.name}
			</div>
		</div>
	)
}

export default FriendsCard