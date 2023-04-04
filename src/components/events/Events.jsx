import React from 'react'
import './events.css'
import headEvent from '../../assets/events-head-img.svg'

const Events = () => {
  return (
    <div className='event-wrapper'>
        <div className='event-header'>
            <img src={headEvent} alt="" />
            <p>EVENTS</p>
        </div>
        <div></div>
    </div>
  )
}

export default Events