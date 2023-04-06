import React from "react";
import "./sponsors.css";
import headEvent from "../../assets/events-head-img.svg";
import twinkle from "../../assets/twinkle-star.svg";
import tinkerhub from "../../assets/tinkerhub.svg";
import neurahire from "../../assets/neurahire.svg";
import ggnation from "../../assets/ggnation.svg";
import iedc from "../../assets/iedc.svg";
import arrow from "../../assets/header-arrow-img.svg";

const sponsors = () => {
  return (
    <section id="sponsors">
      <div className="sponsors-wrapper">
        <div className="event-wrapper">
          <div className="event-header transition-div-s">
            <img src={headEvent} alt="" />
            <p>SPONSORS</p>
          </div>
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
        <div className="sponsors-text-div-wrapper">
          <div className="sponsors-text-div">
            <p className="sponsors-text-one">
              <span className="text-color">INTERESTED IN SUPPORT</span>ING THIS
              VENTURE ?
            </p>
            <p className="sponsors-text-two">
              View our sponsorship guide. We’ll be happy having you in our
              family
            </p>
          </div>
          <div>
            <a href="#contact">
              <object data={arrow} type="image/jpeg" id="arrow">
                <img
                  src={arrow}
                  alt="A beautiful landscape with mountains and a lake"
                />
              </object>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sponsors;
