import React from "react";
import './FooterLeft.css'
import MusicNote from "./icons/MusicNote";
// import music from'./icons/music.svg'

function FooterLeft(props){

	const {channel,description,song}= props

    return (
        <div className="footer-left">
            <div className="">
                <h3>@{channel}</h3>
                <p>{description}</p>

                <div className="">
                    <MusicNote style={{width:'30px'}} />
                    {/* <img src={music}/> */}

                    <marquee direction="left" scrollamount="2">
			            	{song}
			        </marquee>         
           </div>
                
                
            </div>
            
            </div>
    )
}

export default FooterLeft