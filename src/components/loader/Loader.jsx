import React from 'react';
import c from './Loader.module.css';

let Loader = () => {
	return (
		<div className={c.container}>
			<div className={c.lds_spinner}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loader;