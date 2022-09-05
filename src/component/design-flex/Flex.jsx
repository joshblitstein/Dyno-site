import React, {useState, useEffect} from 'react'
import audio from "../../assests/choir.mp3"
import './flex.scss'

export default function Flex() {
    const [num, setNum] = useState(['#E4CA9D', '#BD171E', '#E4CA9D', '#BD171E', '#E4CA9D', '#BD171E','#E4CA9D', '#BD171E'])
    const [shapes, setShapes] = useState(['#E4CA9D', '#BD171E', '#E4CA9D', '#BD171E', '#E4CA9D', '#BD171E','#E4CA9D', '#BD171E'])
    const [open, setOpen] = useState(false)
    function onHover(){
      console.log('hey')  
    }
    function handleColor(color){
        if(color == '#E4CA9D'){
            return '#BD171E'
        }else {
            return'#E4CA9D'
        }
        }
    let audioObj = new Audio(audio);
    function handleEye(){
        document.querySelector('div.circle').style.height = '50%'
        document.querySelector('div.circle').style.background = '#E4CA9D'
        audioObj.play()
        setOpen(true)
    }
    function handleLeave(){
        document.querySelector('div.circle').style.background = 'black'
        document.querySelector('div.circle').style.height = '7px'
        audioObj.pause()
        setOpen(false)
    }
    return (
        <div id='skills' className='flex-container'>
            <h1>Check out our pure HTML-CSS skills</h1>
           
            <div className='art-container'>
            <div className='art'>
           {
               num.map(elem =>{
                 return ( 
                <div onMouseOver={onHover} style ={{backgroundColor:elem}}  className='styles'>
                   <div style={{backgroundColor:elem ? '#E4CA9D':'#BD171E'}}  className='styles-child'>
                        {""}   
                    </div> 
                </div>)
               })
           }
           {
               shapes.map(elem =>{
                 return ( 
                <div style ={{backgroundColor:elem}}  className='styles-two'>
                    <div style={{backgroundColor:elem ? '#E4CA9D':'#BD171E'}} className='styles-child'>
                        {""}    
                    </div> 
                </div>)
               })
           }
           </div>
           <div onMouseOver={handleEye} style={{height:"90%"}} className='art-three'>
             <div className='circle'>
                <div style={{display:open?'flex': 'none'}} className="eye">
                    <div style={{display:open?'flex': 'none'}} className="eye-child">
                        <div style={{display:open?'flex': 'none'}} className="eye-child-two">
                            <div style={{display:open?'flex': 'none'}} className="eye-child-three">   

                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div>
            <div className='art-two'>
           {
               num.map(elem =>{
                 return ( 
                <div onMouseOver={onHover}  onMouseLeave={handleLeave} style ={{backgroundColor:elem}}  className='styles'>
                  <div style={{backgroundColor:elem ? '#E4CA9D':'#BD171E'}} className='styles-child'>
                        {""}    
                    </div> 
                </div>)
               })
           }
           {
               shapes.map(elem =>{
                 return ( 
                <div style ={{backgroundColor:elem}}  className='styles-two'>
                    <div style={{backgroundColor:elem ? '#E4CA9D':'#BD171E'}} className='styles-child'>
                        {""}    
                    </div> 
                </div>)
               })
           }
           </div>
        
           </div>
           <p className='sleeping'>
              {!open ?"Shh he's sleeping":
                "Hes awake!"
              }
           </p>
        </div>
    )
}
