import { useState } from "react";
import bg_event from "../../assets/Events-image/event-card-bg.png";
import bg_event_r from "../../assets/Events-image/event-card-bg-r.png";
import "./Events.css";
import arrow from "../../assets/Events-image/arrow.png";
const Eventsingles = ({
  forms,
  title,
  description,
  image,
  date,
  time,
  venue,
}) => {
  return (
    <div className="event-single-card image-container">
      <img src={bg_event} />
      <div className="event-single-card-content foreground-image">
        <img src={image} />
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{time}</p>
        <p>{venue}</p>
        <button></button>
      </div>
    </div>
  );
};
export default Eventsingles;
