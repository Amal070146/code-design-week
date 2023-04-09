import Navbar from '../../components/navbar/Navbar'
import headEvent from "../../assets/team-head-img.svg";


const Schedule = () => {
  return (
    <section className="body-wrapper" id="schedule">
      <Navbar />
      <div className="events-wrapper">
        <div className="events-header transition-div-e">
          <p>SCHEDULE</p>
          <img src={headEvent} alt="" />
        </div>
        <div>
          <div>
            <h1>DAY 1</h1>
            <div>
              <div>
                <p>09 : 00 AM</p>
                <p>10 : 00 AM</p>
                <p>03 : 00 PM</p>
              </div>
              <div>
                <p>Inauguration</p>
                <p>Introduction to Design</p>
                <p>DESIGNAGE - Logo Quiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Schedule;
