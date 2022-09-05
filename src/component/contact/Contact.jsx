import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.scss';


export default function Contact() {
    const [togle, setToggle] = useState(false)
    const form = useRef();

    function sendEmail(e){
        setToggle(true)
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm("service_17ypoyv","template_vef65zc", form.current, 'user_lQR9QRWC4KAKeGdj20DSE')
          .then((result) => {
              console.log(result.text);
          }, (error) => { 
              console.log(error.text);
          });
    }

    return (
        <>
       {!togle ?
        <div id='contact' className ='contact-container'> 
            <div className="form-container">
                <h1 className='form-title' style={{color:'orange'}}>Get in touch</h1>
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <div className="user-details">
                        <div className="left-contact">

                        <div className="inpur-box">
                            <span className="details">Name</span>
                            <input type="text" name="url" placeholder='Full Name Please' />
                        </div>
                        <div className="inpur-box">
                            <span className="details">Email</span>
                            <input  type="email" name="email" placeholder='EX: email@mail.org' />
                        </div>
                        <div className="inpur-box">
                            <span className="details">Phone Number</span>
                            <input type="text" name="number" placeholder='1(234)-567-8910' />
                        </div> 
                        </div>
                        <div className="right-contact">
                        <div className="inpur-box">
                            <span className="details">More Details</span>
                            <textarea type="text" name="message" placeholder='Feed me' />
                        </div>
                        </div>
                      
                        <div className="submit">
                            <input type='submit'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>:
        <div className='contact-container'><>
        <div className='form-container'>
        <h1 style={{color: '#BD171E'}}>Thank You!</h1>
            <p style={{color: '#BD171E', textAlign:'center'}}><strong>We will be with you shortly.<br/> also check your spam if we haven't replied in a bit.</strong></p>
        </div>
           
        </></div>
                }
        </>
    
    )
        
}
