import React from 'react';
import { NavLink } from 'react-router-dom';
import LoaderMini from '../loader/mini/LoaderMini';
import classes from './Header.module.css';



const Header = (props) => {
	return (
		<header className={classes.header}>
			<div className={classes.container}>
				<div className={classes.top_menu}>
					<div className={classes.logo_image}></div>
					<div className={classes.search_area}>
						<input type="text" />
					</div>
					{!props.isFetch ?
						<div className={classes.login}>
							{props.isAuth ? props.login :
								< NavLink to='/login'>
									Вход
										</NavLink>
							}
						</div> :
						<LoaderMini />
					}
				</div>

			</div>

		</header >
	)
}

export default Header;