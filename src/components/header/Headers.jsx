import React from "react";
import "./header.css";
import play from "../../assets/header-play-img.svg";
import loc from '../../assets/location-logo.svg';
import cal from '../../assets/calender-logo.svg';
import he from '../../assets/header-image.svg'
import Nametag from './namebar'

const header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div>
          <div className="header-head">
            <div>
              <p className="font-style">CODE</p>
              <div>
                <img className="play" src={play} alt="" />
              </div>
            </div>
            <p className="font-styles">DESIGN WEEK</p>
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
          </div>
        </div>
      </div>
      <Nametag />
    </>
  );
};

export default header;
