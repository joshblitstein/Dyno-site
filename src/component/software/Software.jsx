import React from 'react'
import './software.scss'
import { IoIosAperture } from 'react-icons/io'
export default function Software() {
  return (
    <div id='software' className='software-container'>
        <div className="content-container">
            <div className="software-right">
                <h2>Not Just Design</h2>
                <p className='para'>
                We're here to help you organically grow your business. With our cloud-based software, you'll be able to automate tedious tasks and focus your time on strategic projects. We offer a suite of features that will save you time and provide the best customer service in the industry!<br/> As a business owner, you know that your software is the backbone of your company. It's your company's brain. With our custom business software, you can take care of all the aspects of running and growing your business. You'll have complete control over every aspect of your workflow, from accounting and sales to inventory management and customer support.
                </p>
            </div>
            <div className="software-left">
                <span className='icon'>
                  <IoIosAperture />
                </span>
            </div>
        </div>

    </div>
  )
}
