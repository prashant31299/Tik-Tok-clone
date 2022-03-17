import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import './Video.css'
import { useRef } from 'react'

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages } = props
	const videoRef = useRef(null)

	const onVideoPress = () => {
		if (videoRef.current.paused) {
				videoRef.current.play()
			} else {
				videoRef.current.pause()
			}	}
		
	return (
		<div className="video">
<video
				className="player"
				onClick={onVideoPress}
				muted
				ref={videoRef}
				loop
				src={url}
			></video>			<div className="bottom-controls">
				<FooterLeft channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
