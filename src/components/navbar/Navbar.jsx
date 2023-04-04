import React from 'react'
import logo from '../../assets/cdw-logo.svg'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav-bar-wrapper navbar'>
        <div>
            <a href="#header"><img src={logo} alt="" /></a>
        </div>
        <div className='nav-links'>
          <a href="#about">ABOUT US</a>
          <a href="#events">EVENTS</a>
          <a href="#team">OUR TEAM</a>
          <a href="#sponsors">SPONSORS</a>
          <a href="#contact">CONTACT</a>
        </div>
    </div>
  )
}

export default Nav