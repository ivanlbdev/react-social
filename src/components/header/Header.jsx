import React from 'react';
import classes from './Header.module.css';



const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.container}>
				<div className={classes.top_menu}>
					<div className={classes.logo_image}></div>
					<div className={classes.search_area}>
						<input type="text" />
					</div>
					<div className={classes.menu_list}>
						<p>Выход</p>
					</div>
				</div>

			</div>

		</header>
	)
}

export default Header;