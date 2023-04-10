import React from "react";
import "./sponsors.css";
import headEvent from "../../assets/events-head-img.svg";
import twinkle from "../../assets/twinkle-star.svg";
import tinkerhub from "../../assets/sponsors/tinkerhub.png";
import solana from "../../assets/sponsors/Solana.png";
import filecoin from "../../assets/sponsors/filecoin.png";
import devfolio from "../../assets/sponsors/devfolio.png";
import polygon from "../../assets/sponsors/polygon.png";
import replict from "../../assets/sponsors/Replit.png";
import arrow from "../../assets/sponsors-arrow.svg";

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
              <img src={devfolio} alt="" />
              <img src={polygon} alt="" />
            </div>
            <div className="line l-one"></div>
          </div>
          <div className="div-sponsors-tire">
            <div className="twinkle-sponsors">
              <img src={twinkle} alt="" />
              <img src={twinkle} alt="" />
            </div>
            <div className="company-sponsors-div">
              <img src={replict} alt="" />
              <img src={solana} alt="" />
              <img src={filecoin} alt="" />
            </div>
            <div className="line l-two"></div>
          </div>
          <div className="div-sponsors-tire">
            <div className="twinkle-sponsors">
              <img src={twinkle} alt="" />
            </div>
            <div className="company-sponsors-div">
              <img src={tinkerhub} alt="" />
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
          <div className="arrow-sponsor">
            <a href="#contact">
              
                <img 
                  src={arrow}
                  alt=""
                />
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sponsors;
