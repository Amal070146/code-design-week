import React, { useState } from "react";
import "./header.css";
import play from "../../assets/header-play-img.svg";
import loc from "../../assets/location-logo.svg";
import cal from "../../assets/calender-logo.svg";
import he from "../../assets/header-image.svg";
import arrow from "../../assets/header-arrow-img.svg";
import Nametag from "./namebar";
import dots from "../../assets/dots-header.svg";
import twinkle from "../../assets/twinkle-star.svg";

const Header = () => {
  const [enableoverlay, setEnableOverlay] = useState(false);
  return (
    <section id="header">
      <div className="header-wrapper">
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div className="header-head">
            <div className="dots-image">
              <img src={dots} alt="" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "-20px",
              }}
            >
              <div style={{ display: "flex", marginBottom: "-65px" }}>
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
          <div className="design-arrow" style={{ background: `url(${he})` }}>
            {enableoverlay && (
              <div className="heroOverlay">
                <div>
                  <h1>DESIGNATHON</h1>
                  <span>By CODe</span>
                </div>
              </div>
            )}
            <button
              className="image-button"
              onClick={() => setEnableOverlay(!enableoverlay)}
            >
              <img
                className=""
                src={arrow}
                alt=""
                style={{ rotate: enableoverlay ? "180deg" : "" }}
              />
            </button>
          </div>
        </div>
      </div>
      <Nametag />
    </section>
  );
};

export default Header;
