import Navbar from "../../components/navbar/Navbar";
import headEvent from "../../assets/team-head-img.svg";
import "./schedule.css";
import CopyRight from "../../components/copyright/CopyRight";

const Schedule = () => {
  return (
    <section className="body-wrapper" id="schedule">
      <Navbar />
      <div className="schedule-wrapper">
        <div className="events-header transition-div-e">
          <p className="schedule-head-tag-name">SCHEDULE</p>

        </div>
        <div className="schedule-content-wrapper">
          <div className="schedule-content-div">
            <h1>DAY 1</h1>
            <div className="schedule-content-div-ta">
              <div className="schedule-content-div-t">
                <h4>09 : 00 AM</h4>
                <p>Inauguration</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>10 : 00 AM</h4>
                <p>Introduction to Design</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>03 : 00 PM</h4>
                <p>DESIGNAGE - Logo Quiz</p>
              </div>
            </div>
          </div>
          <div className="schedule-content-div">
            <h1>DAY 2</h1>
            <div className="schedule-content-div-ta">
              <div className="schedule-content-div-t">
                <h4>09 : 30 AM</h4>
                <p>ADOBE by CODe -Creative Cloud</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>04 : 00 PM</h4>

                <p>GRAPHICA - Canva</p>
              </div>
            </div>
          </div>
          <div className="schedule-content-div">
            <h1>DAY 3</h1>
            <div className="schedule-content-div-ta">
              <div className="schedule-content-div-t">
                <h4>09 : 30 AM</h4>
                <p>ADOBE by CODe - Creative Cloud</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>04 : 00 PM</h4>
                <p>GRAPHICA - Canva</p>
              </div>
            </div>
          </div>
          <div className="schedule-content-div">
            <h1>DAY 4</h1>
            <div className="schedule-content-div-ta">
              <div className="schedule-content-div-t">
                <h4>09 : 30 AM</h4>
                <p>ADOBE by CODe - Adobe Xd, Figma, Behance</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>04 : 00 PM</h4>
                <p>GRAPHICA - Figma</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>ALL DAY</h4>

                <p>DESIGN EXPO</p>
              </div>
            </div>
          </div>
          <div className="schedule-content-div">
            <h1>DAY 5</h1>
            <div className="schedule-content-div-ta">
              <div className="schedule-content-div-t">
                <h4>09 : 30 AM</h4>
                <p>ADOBE by CODe - Adobe Photoshop, Adobe Illustrator</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>04 : 00 PM</h4>

                <p>GRAPHICA - Adobe Photoshop</p>
              </div>
            </div>
          </div>
          <div className="schedule-content-div">
            <h1>DAY 6</h1>
            <div className="schedule-content-div-ta">
              <div className="schedule-content-div-t">
                <h4>09 : 30 AM</h4>
                <p>Game Design Workshop - Unity</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>04 : 00 PM</h4>
                <p>DESIGNATHON Inauguration</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>04 : 30 PM</h4>
                <p>DESIGNATHON commences</p>
              </div>
            </div>
          </div>
          <div className="schedule-content-div">
            <h1>DAY 7</h1>
            <div className="schedule-content-div-ta">
              <div className="schedule-content-div-t">
                <h4>04 : 00 PM</h4>
                <p>DESIGNATHON ends</p>
              </div>
              <div className="schedule-content-div-t">
                <h4>04 : 30 PM</h4>
                <p>Valedictory Ceremony</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </section>
  );
};
export default Schedule;
