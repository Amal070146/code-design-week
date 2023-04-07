import React from "react";
import "./header.css";
import play from "../../assets/header-play-img.svg";
import loc from "../../assets/location-logo.svg";
import cal from "../../assets/calender-logo.svg";
import he from "../../assets/header-image.svg";
import arrow from "../../assets/header-arrow-img.svg";
import Nametag from "./namebar";
import dots from "../../assets/dots-header.svg";
import twinkle from "../../assets/twinkle-star.svg";
import Marqueuecomponent from "./Marqueuecomponent";

const header = () => {
  return (
    <section id="header">
      <div className="header-wrapper">
        <div>
          <div className="header-head">
            <div className="dots-image">
              <img src={dots} alt="" />
            </div>
            <div>
              <p className="font-style">CODE</p>
              <div className="text-image-wrap">
                <div className="text-image">
                  <img src={twinkle} alt="" />
                  <img src={twinkle} alt="" />
                </div>
                <img className="play" src={play} alt="" />
              </div>
            </div>
            <div className="text-image-wrap">
              <p className="font-styles">DESIGN WEEK</p>
              <div className="text-image sec-twin">
                <img src={twinkle} alt="" />
                <img src={twinkle} alt="" />
              </div>
            </div>
          </div>
          <div className="loc-cal">
            <div>
              <img src={loc} alt="location" />
              <h3>CHRIST COLLEGE OF ENGINEERING, IRINJALAKUDA</h3>
            </div>
            <div>
              <img src={cal} alt="calander" />
              <h3>22 - 28 MAY 2023</h3>
            </div>
          </div>
          <div className="design-arrow">
            <img className="design-arroid" src={he} alt="objects" />
            <a className="image-button" href="#about">
              <img className="" src={arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Marqueuecomponent
        content={`CODE DESIGN WEEK code design week CODE DESIGN WEEK code design week CODE DESIGN WEEK code design week CODE DESIGN WEEK code design week CODE DESIGN WEEK code design week CODE DESIGN WEEK code design week CODE DESIGN WEEK code design week CODE DESIGN WEEK code design week CODE DESIGN WEEK`}
      />
    </section>
  );
};

export default header;
