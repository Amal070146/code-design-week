import React from 'react'
import './sponsors.css'
import headEvent from "../../assets/events-head-img.svg";


const sponsors = () => {
  return (
    <section id='sponsors'>
      <div className="sponsors-wrapper">
        <div className="event-wrapper">
          <div className="event-header transition-div-s">
            <img src={headEvent} alt="" />
            <p>SPONSORS</p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default sponsors