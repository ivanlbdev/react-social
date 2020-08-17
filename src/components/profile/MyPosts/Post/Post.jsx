import React from 'react';
import AvatarUser from '../../../img/IMG_5761.jpg'
import c from './Post.module.css';

const Post = (props) => {
	return (
		<div className={c.done_post}>
			<div className={c.post_head}>
				<img src={AvatarUser} alt="lalala" />
				<div className={c.post_content}>
					<div className={c.time}>06.08.2020</div>
					<div className={c.post_text}>
						<p>
							{props.message}
						</p>
					</div>
					<span>
						{props.likeNumber} likes
					</span>
				</div>
			</div>
		</div>
	)
}
export default Post;