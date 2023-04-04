import React from "react";
import "./about.css";
import strip from "../../assets/dual-color-strip.svg";
import des from "../../assets/about-page-img.svg";

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
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
          </div>
        </div>
        <div className="about-info">
          <div>
            <img src={des} alt="" />
          </div>
          <div className="about-info-data">
            <div>
              <h3>07</h3>
              <p>DESIGNING DAYS</p>
            </div>
            <div>
              <h3>55</h3>
              <p>COMPLETED PROJECTS</p>
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
