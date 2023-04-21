import { useState } from "react";
import bg_event from "../../assets/Events-image/event-card-bg.png";
import bg_event_r from "../../assets/Events-image/event-card-bg-r.png";
import "./Events.css";
import button_bg from "../../assets/Events-image/button-bg.png";
import arrow from "../../assets/Events-image/arrow.png";
import logo from "../../assets/cdw-logo.svg";
import fold from "../../assets/Events-image/event-card-close.png";
const Eventsingles = ({
  forms,
  title,
  description,
  image,
  date,
  time,
  venue,
}) => {
  const [rotatecard, setrotatecard] = useState(false);
  function rotateCard() {
    console.log(!rotatecard);
    setrotatecard(!rotatecard);
  }
  return (
    <>
      {rotateCard && (
        <div
          className="event-single-card image-container"
          style={{ display: rotatecard ? "none" : "" }}
        >
          <img src={bg_event} />
          <div className="event-single-card-content foreground-image">
            <img src={image} />
            <h1>{title}</h1>
            <div>
              <p style={{ color: "#E30069" }}>{date}</p>
              <p>{time}</p>
              <p>{venue}</p>
            </div>
            <button className="image-container" onClick={rotateCard}>
              <img src={button_bg} />
              <div className="foreground-image">
                <p>EXPAND</p>
                <img src={arrow} />
              </div>
            </button>
          </div>
        </div>
      )}
      {rotateCard && (
        <div
          className="event-single-card-r image-container"
          style={{ display: rotatecard ? "" : "none" }}
        >
          <div className="image-container">
            <img src={bg_event_r} />
            <a onClick={rotateCard} style={{ cursor: "pointer" }}>
              <img
                className="foreground-image"
                style={{ left: "86.5%", cursor: "pointer" }}
                src={fold}
              />
            </a>
          </div>
          <div className="event-single-card-content-r foreground-image">
            <img src={image} />
            <img src={logo} />
            <p>{description}</p>
            <a
              href={forms}
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <p>REGISTER</p>
              <img style={{ width: "20px" }} src={arrow} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default Eventsingles;
