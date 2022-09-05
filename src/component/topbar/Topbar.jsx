import React from 'react'
import './topbar.scss'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { GiDynamite } from 'react-icons/gi'
import { GoPaintcan } from 'react-icons/go'
import {RiComputerLine} from 'react-icons/ri'
import {DiCss3} from 'react-icons/di'
import { IoMdPricetags } from 'react-icons/io'
import { IoIosContacts } from 'react-icons/io'
import { IconContext } from 'react-icons/lib'
import { CgDisplayFlex } from 'react-icons/cg'

export default function Topbar() {
    return (
        
        <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="#" class="nav-link">
              <span class="link-text logo-text">Dyno<br />myte</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
    
          <li class="nav-item">
            <a href="#lobby" class="nav-link">
             
              <GiDynamite class='svg-inline--fa fa-cat fa-w-16 fa-9x'/>
              <span class="link-text">Who we are</span>
            </a>
          </li>
    
          <li class="nav-item">
            <a href="#WhatWeDo" class="nav-link">
             <GoPaintcan class='svg-inline--fa fa-cat fa-w-18 fa-9x'/>
              <span class="link-text">What we do</span>
            </a>
          </li>
    
          <li class="nav-item">
            <a href="#software" class="nav-link">
            <RiComputerLine class='svg-inline--fa fa-cat fa-w-18 fa-9x'/>
            <span class="link-text">Custom Software</span>
            </a>
          </li>
    
          <li class="nav-item">
            <a href="#skills" class="nav-link">
            <DiCss3 class='svg-inline--fa fa-cat fa-w-18 fa-9x'/>
            <span class="link-text">HTML and CSS skills</span>
            </a>
          </li>
    
          <li class="nav-item" id="themeButton">
            <a href="#contact" class="nav-link">
            
              <IoIosContacts class='svg-inline--fa fa-cat fa-w-16 fa-9x'/>
              
              <span class="link-text">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    
    )
}
