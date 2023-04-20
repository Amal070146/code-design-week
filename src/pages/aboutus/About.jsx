import Navbar from "../../components/navbar/Navbar";
import headEvent from "../../assets/team-head-img.svg";
import "./about.css";
import Team from "../../components/team/team";
import codelogo from "../../assets/code-logo.png";
import whydesign from '../../assets/team/whydesign.png'

import CopyRight from "../../components/copyright/CopyRight";
const About = () => {
  return (
    <section className="body-wrapper" style={{ backgroundColor: "#171717" }}>
      <Navbar />
      <div className="aboutus-wrapper">
        <div className="aboutus-header">
          <h1>ABOUT US</h1>
        </div>
        <div className="aboutus-content-wrapper">
          <div className="code-aboutus">
            <div>
              <img src={codelogo} alt="" />
            </div>
            <div>
              <p>
                The <span className="text-color">Community Of Developers</span>{" "}
                (CODe), the face of Computer Science and Engineering department,
                Christ College of Engineering, Irinjalakuda was founded on
                October 6th, 2018. It serves to augment the professional outlook
                of students, intends to foster practical knowledge and equip
                them to be socially responsible engineers. CODe, with both
                faculty and students as its members, is an active association
                and it organizes various programs which aid to bridge the gap
                between theory and practice.
              </p>
            </div>
          </div>
          <div className="why-aboutus">
            <div>
              <p>
                There are students with interest in design There are no
                possibilities for them to grow in college. Even the computer
                science department focuses only on programming. Creative
                students are stuck in traditional jobs, not recognizing their
                inner potential. The possibility of design is not at all raised.
                Limited awareness of career paths & the scope in Design
                industry. Here the concept of Design Week arises.
              </p>
            </div>
            <div>
              <img src={whydesign} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Team />

      <CopyRight />
    </section>
  );
};
export default About;
