import React, {useRef}  from 'react'
import './gen.scss'
import src from '../../assests/Dynamite Designs.mp4'

export default function Gen() {
    const vidRef = useRef(null);
    console.log(vidRef)
    function handleHover(){
        vidRef.current.play();
    }
    function handleLeave(){
        vidRef.current.pause();      
    }


    return (
        <div id='lobby' className ='gen-container'>
            <div className='wrap'>
                <video  ref={vidRef} onMouseOver={handleHover} onMouseLeave={handleLeave}>
                <source src={src} type="video/mp4"></source>
                </video>    
            </div>
        </div>
    )
}
