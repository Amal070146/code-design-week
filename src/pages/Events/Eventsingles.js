import { useState } from "react";
import arrow from "../../assets/arrow-white.png";
import "./Events.css";
const Eventsingles = ({ number, title, description1, image, description2 }) => {
  const [openpopup, setopenpopup] = useState(false);
  function openPopup() {
    setopenpopup(!openpopup);
  }

  return (
    <div className="events-content-routed">
      <button className="events-button-one">TILL APR 30 | 11:59AM</button>

      <div class="events-card">
        <div class="events-card-front">
          <h2>MASCOT DESIGN CHALLENGE</h2>
        </div>
        <div class="events-card-back">
          <h2>
            Design a creative mascot for the CODe Design Week, give it an apt
            name. You can use any medium of your choice from traditional
            hand-drawn sketches to digital illustrations!! or you could even use
            AI generators like DALL-E or Mid journey for designing one for you!
          </h2>
        </div>
      </div>
      
        <button className="events-button-two">
          Attend the Event <img src="" />
        </button>
      
    </div>
  );
};
export default Eventsingles;
