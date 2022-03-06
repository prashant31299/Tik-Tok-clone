import React from 'react'

export default function Video(props) {
    const {url}=props
	// write your code here
	return (
        <div className='video'>
    <video className='player' controls loop 
    src={url}>
      {/* <source src="./video.mp4" type="video/mp4"/> */}

        </video>
        

        </div>
    )
}
