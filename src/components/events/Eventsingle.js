import { useState } from "react";
import arrow  from "../../assets/arrow-white.png";
import "./events.css";
const Eventsingle = ({ number, title, description1, image, description2 }) => {
  const [openpopup, setopenpopup] = useState(false);
  function openPopup() {
    setopenpopup(!openpopup);
  }

  return (
    <div>
      <div className="events-content-div">
        <div className="events-content-div-left">
          <p
            className={
              "number-event " + (openpopup ? "number-event-active" : null)
            }
          >
            {number}
          </p>
          <p className="heading-events">{title}</p>
        </div>
        <div className="events-content-div-right">
          <p>{description1}</p>

          <button
            type="button"
            className="openpopup"
            onClick={openPopup}
            style={{
              background: openpopup
                ? "linear-gradient(128.92deg, #8E0042 0%, #E30069 57.77%)"
                : "transparent",
              rotate: openpopup ? "90deg" : "",
            }}
          >
            <img className="arrow-event" src={arrow} alt="" />
          </button>
        </div>
      </div>
      {openpopup && (
        <div className="form-popup" id="1">
          <div className="form-container">
            <img src={image} alt="" />
            <div>
              <p>{description2}</p>
            </div>
          </div>
        </div>
      )}
      <div className="line-event"></div>
    </div>
  );
};
export default Eventsingle;
