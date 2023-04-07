import { arrow } from "../../assets";
import "./events.css";
const Eventsingle = ({ number, title, description1, image, description2 }) => {
  function openPopup(id) {
    console.log("hello");
    document.getElementById.style.display = "flex";
  }

  function closePopup(id) {
    document.getElementById.style.display = "none";
  }
  return (
    <div>
      <div className="events-content-div">
        <div className="events-content-div-left">
          <p className="number-event">{number}</p>
          <p className="heading-events">{title}</p>
        </div>
        <div className="events-content-div-right">
          <p>{description1}</p>

          <button type="button" className="openpopup" onClick={openPopup}>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div class="form-popup" id="1">
        <div class="form-container">
          <img src={image} alt="" />
          <div>
            <p>{description2}</p>
            <button type="button" className="btn cancel" onClick={closePopup}>
              Show less
            </button>
          </div>
        </div>
      </div>
      <div className="line-event"></div>
    </div>
  );
};
export default Eventsingle;
