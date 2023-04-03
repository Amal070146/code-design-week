import React from 'react'
import logo from '../../assets/cdw-logo.svg'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav-bar-wrapper'>
        <div>
            <a href=""><img src={logo} alt="" /></a>
        </div>
        <div className='nav-links'>
          <a href="">ABOUT US</a>
          <a href="">EVENTS</a>
          <a href="">OUR TEAM</a>
          <a href="">CONTACT</a>
        </div>
    </div>
  )
}

export default Nav