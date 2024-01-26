import React, { forwardRef } from 'react';
import './Post.css';
// import { Avatar } from '@mui/material';
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import { auth } from '../../firebase.js';

const Post = forwardRef(
	( {displayName, username, verified, text, avatar, image}, ref ) => {
		return (
			<div className='post' ref={ref}>
				<div className='post--avatar'>
					<img src={auth.currentUser.photoURL} alt="" className='post--avatarImage'/>
				</div>
				<div className='post--body'>
					<div className='post--header'>
						<div className='post--headerText'>
							<h3>{auth.currentUser.displayName}
							<span className='post--headerSpecial'>
								<VerifiedUser className='post--badge'/>
								{/* @{username} */}
							</span>
							</h3>
						</div>
							<div className='post--headerDescription'>
								<p className='post--text'>{text}</p>
							</div>
					</div>
							<img src={image} alt=""/>
							<div className='post--footer'>
								<ChatBubbleOutline fontSize='small' />
								<Repeat fontSize='small' />
								<FavoriteBorder fontSize='small' />
								<PublishOutlined fontSize='small' />
							</div>
				</div>
			</div>
		);
	}
);

export default Post;