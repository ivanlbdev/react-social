import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsBarContainer from './FriendsBar/FriendsBarContainer';

const Navigation = (props) => {
	return (
		<div className={c.nav_block}>
			<nav className={c.nav}>
				<div className={c.full_nav}>
					<div>
						<NavLink to="/profile" activeClassName={c.active}>Профиль</NavLink>
					</div>
					<div>
						<NavLink to="/dialogs" activeClassName={c.active}>Сообщения</NavLink>
					</div>
					<div>
						<NavLink to="/news" activeClassName={c.active}>Новости</NavLink>
					</div>
					<div>
						<NavLink to="/music" activeClassName={c.active}>Музыка</NavLink>
					</div>
					<div>
						<NavLink to="/settings" activeClassName={c.active}>Настройки</NavLink>
					</div>
				</div>
			</nav>
			<FriendsBarContainer />
		</div>
	)
}

export default Navigation;