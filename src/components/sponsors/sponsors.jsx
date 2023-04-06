import React from "react";
import "./sponsors.css";
import headEvent from "../../assets/events-head-img.svg";
import twinkle from "../../assets/twinkle-star.svg";
import tinkerhub from "../../assets/tinkerhub.svg";
import neurahire from "../../assets/neurahire.svg";
import ggnation from "../../assets/ggnation.svg";
import iedc from "../../assets/iedc.svg";

const sponsors = () => {

  return (
    <section id="sponsors">
      <div className="sponsors-wrapper">
        <div className="event-wrapper">
          <div className="event-header transition-div-s">
            <img src={headEvent} alt="" />
            <p>SPONSORS</p>
          </div>
          <div className="sponsors-logo-wrapper">
            <div className="div-sponsors-tire">
              <div className="twinkle-sponsors">
                <img src={twinkle} alt="" />
                <img src={twinkle} alt="" />
                <img src={twinkle} alt="" />
              </div>
              <div className="company-sponsors-div">
                <img src={tinkerhub} alt="" />
                <img src={ggnation} alt="" />
                <img src={iedc} alt="" />
                <img src={neurahire} alt="" />
              </div>
              <div className="line l-one"></div>
            </div>
            <div className="div-sponsors-tire">
              <div className="twinkle-sponsors">
                <img src={twinkle} alt="" />
                <img src={twinkle} alt="" />
              </div>
              <div className="company-sponsors-div">
                <img src={tinkerhub} alt="" />
                <img src={ggnation} alt="" />
                <img src={iedc} alt="" />
                <img src={neurahire} alt="" />
              </div>
              <div className="line l-two"></div>
            </div>
            <div className="div-sponsors-tire">
              <div className="twinkle-sponsors">
                <img src={twinkle} alt="" />
              </div>
              <div className="company-sponsors-div">
                <img src={tinkerhub} alt="" />
                <img src={ggnation} alt="" />
                <img src={iedc} alt="" />
                <img src={neurahire} alt="" />
              </div>
              <div className="line l-three"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sponsors;
