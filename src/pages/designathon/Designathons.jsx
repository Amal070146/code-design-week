import React, { useState } from "react";
import "./designathon.css";
import Contacts from "../../components/contact/Contacts";
import Navbar from "../../components/navbar/Navbar";
import CopyRight from "../../components/copyright/CopyRight";
import Sponsors from '../../components/sponsors/sponsors'
import header_video from "../../assets/designathon/Designathon bg video.mp4";
const Designathon = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section
      className="body-wrapper"
      style={{
        background: "black",
        height: "100vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <div className="designathon-wrapper-main">
        <div className="home-designaton">
          <div className="home-designaton-left">
            <div className="designathon-header-content">
              <p>FOCUS. INTERACT. CREATE.</p>
              <p>DESIGNATHON</p>
              <p className="by-code">by CODe</p>
            </div>
            <div className="designathon-header-dates">
              <div>
                <h2>27-28</h2>
                <p>MAY 2023</p>
              </div>
              <div>
                <h2>24</h2>
                <p>HOURS</p>
              </div>
              <div>
                <h2>25K+</h2>
                <p>PRIZEPOOL</p>
              </div>
            </div>
            <div
              className="apply-button"
              data-hackathon-slug="designathon"
              data-button-theme="dark"
              style={{ height: "2.4vw", width: "17vw" }}
            ></div>
          </div>
          <div className="designathon-person-video">
            <video loop autoPlay>
              <source src={header_video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Sponsors />
      <Contacts />
      <CopyRight />
    </section>
  );
};

export default Designathon;
