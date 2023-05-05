import { useState } from "react";
import "./Events.css";
import p1 from "../../assets/Events-image/detail-p1.png";
import logo from "../../assets/cdw-logo.svg";
import qr_event from "../../assets/Events-image/qr-event.png";
import event_arrow from "../../assets/designathon/white-down-arrow-faq.png";


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
    <>
      <div className="single-event-card-desk">
        <div>
          <img src={image} />
          <div className="popup-card">
            <img src={p1} />
            <div className="popup-card-content-mob foreground-image">
              <img src={logo} />
              <h1>{title}</h1>
              <h2>{date}</h2>
              <img src={qr_event} />
              <p>{description}</p>
              <a href={forms}>
                Attend the Event <img src={event_arrow} alt="sjncjui" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="single-event-card-new">
        <div>
          <img className="bg-event-single" src={image} />
          <div className="popup-card image-container">
            <img src={p1} />
            <div className="popup-card-content-mob foreground-image">
              <img src={logo} />
              <h1>{title}</h1>
              <h2>{date}</h2>
              <img src={qr_event} />
              <p>{description}</p>
              <a href={forms}>
                Attend the Event <img src={event_arrow} alt="sjncjui" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Eventsingles;
