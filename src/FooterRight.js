import React, { useState } from 'react'
import FavoriteIcon from './icons/Favoriteicon'
import FavoriteBorderIcon from './icons/Favoriticonborder'
import MessageIcon from './icons/Message'
import ShareIcon from './icons/Share'
import './FooterRight.css'

function VideoSidebar({ likes, shares, messages }) {
	const [liked, setLiked] = useState(false)
    const count= 342

	return (
		<div className="footer-right">
			<div className="sidebar-icon">
				{liked ? (
					<FavoriteIcon
						style={{ width: '40px', height: '40px' }}
						onClick={(e) => setLiked(false)}
					/>
				) : (
					<FavoriteBorderIcon
						style={{ width: '40px', height: '40px' }}
						onClick={(e) => setLiked(true)}
					/>
				)}
				<p>{liked ? count + 1 : count}</p>
			</div>
			<div className="sidebar-icon">
				<MessageIcon style={{ width: '40px', height: '40px' }} />
				<p>{messages}</p>
			</div>
           
            
			<div className="sidebar-icon record-below">
				<ShareIcon style={{ width: '40px', height: '40px' }} />
			</div> 
				<p>{shares}</p>
			<div className="sidebar-icon record">
				<img src="https://static.thenounproject.com/png/934821-200.png" />
			</div>
		</div>
	)
}

export default VideoSidebar
