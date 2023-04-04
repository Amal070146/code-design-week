import React from "react";
import "./events.css";
import headEvent from "../../assets/events-head-img.svg";

const Events = () => {
  return (
    <section id="events">
      <div className="event-wrapper">
        <div className="event-header transition-div">
          <img src={headEvent} alt="" />
          <p>EVENTS</p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Events;
