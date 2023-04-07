import { useState } from "react";
import { arrow } from "../../assets";
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
            // style={{
            //   background: openpopup
            //     ? "linear-gradient(180deg, rgba(255, 117, 181, 0.5) 27.36%, rgba(237, 68, 146, 0) 89.89%)"
            //     : `linear-gradient(
            //       180deg,
            //       #626262 27.36%,
            //       rgba(40, 40, 40, 0) 89.89%
            //     )`,
            // }}
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
              backgroundColor: openpopup ? "#fff" : "transparent",
              rotate: openpopup ? "60deg" : "",
            }}
          >
            <img src={arrow} alt="" />
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
