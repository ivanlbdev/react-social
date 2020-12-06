import React from 'react';
import c from './LoaderMini.module.css';

let LoaderMini = () => {
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

export default LoaderMini;