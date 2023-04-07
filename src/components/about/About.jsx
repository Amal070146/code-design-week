import React from "react";
import "./about.css";
import strip from "../../assets/dual-color-strip.svg";

const About = () => {
  return (
    <section id="about">
      <div className="about-wrapper">
        <div>
          <p className="text-color-main">
            ARE YOU <span className="text-color">PASSIONATE</span> ABOUT DESIGN?
            WE WILL <span className="text-color">RAISE YOU</span> UP
            <span className="text-color">.</span>
          </p>
        </div>
        <div className="about-description">
          <div>
            <img src={strip} alt="" />
          </div>
          <div>
            <p>
              Computer Science is not just coding, or programming. It is about
              how we use such tools, and what we find out when we do. Its our
              goal to find the designer within you. If you love design, you want
              to pursue your career in design, CODe will help you build up your
              DESIGN skills.
            </p>
          </div>
        </div>
        <div className="about-info">
          <div className="card">
            <div className="card-front"></div>
            <div className="card-back">
              <p>
                CODe Design Week is a week completely dedicated to design,
                hosted by Community Of Developers (CODe), Department of Computer
                Science & Engineering, Christ College of Engineering,
                Irinjalakuda.The event will help you exploring the
                possibilities, opportunities & finding the passion in design.
                There will be workshops, talk sessions, expos, games and
                quizzes.
              </p>
            </div>
          </div>
          <div className="about-info-data">
            <div>
              <h3>07</h3>
              <p>DESIGNING DAYS</p>
            </div>
            <div>
              <h3>10+</h3>
              <p>SKILLED MENTORS</p>
            </div>
            <div>
              <h3>20+</h3>
              <p>LIVE EVENTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
