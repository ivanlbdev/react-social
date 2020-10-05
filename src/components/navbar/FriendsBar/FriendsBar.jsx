import React from 'react';
import c from './FriendsBar.module.css';
import FriendsCard from './FriendsCard/FriendsCard';

const FriendsBar = (props) => {
	let goCard = props.friendsBar.map((value) => <FriendsCard key={value.name} name={value.name} />);
	return (
		<div className={c.friends}>
			<h2>Друзья</h2>
			<div className={c.fr_card}>
				{goCard}
			</div>
		</div>
	)
}

export default FriendsBar