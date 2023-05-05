import React, { useState } from "react";
import "./about.css";
import logo from "../../assets/cdw-logo.svg";
import promov from "../../assets/home-page/promo.mp4";
import displayscreen from "../../assets/about-tab-display.svg";

const About = () => {
  return (
    <section id="about">
      <div className="about-wrapper">
        <div className="about-wrapper-heads">
          <p className="text-color-main">
            ARE YOU <span className="text-color">PASSIONATE</span> ABOUT DESIGN?
            CODe WILL <span className="text-color">RAISE YOU</span> UP
            <span className="text-color">.</span>
          </p>
        </div>
        <div className="about-disply-content-video">
          <div className="display-screen-wrapper">
            <img className="displayscreen" src={displayscreen} alt="" />
            <video autoPlay loop className="logo-about" src={promov}></video>
          </div>
          <div className="display-screen-content">
            <p>
              <b> CODe Design Week (CDW ‘23)</b> is the first ever design week
              conducted in engineering colleges. This is a week completely
              dedicated to design where students from all over Kerala disrupt,
              imagine, ideate, innovate, and design for a better tomorrow. Our
              goal is to hand-pick the budding designers, help them in exploring
              the possibilities, opportunities & finding the passion in design.
              Students can learn and interact through workshops, panel
              discussions, keynote speeches, expos and exhibitions, and many
              more organized as a part of the CODe Design Week (CDW ‘23) where
              they can listen, and discuss with the industry experts on the
              future of design.
            </p>
          </div>
        </div>

        <div className="about-info">
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
