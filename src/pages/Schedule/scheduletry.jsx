import React, { useState } from "react";
import "./scheduletry.css";
import card_bg from '../../assets/schedule/card-bg-black.png'
import card_bg_r from '../../assets/schedule/card-bg-black-r.png'
import mo_qr from "../../assets/schedule/mo-qr.png";
import tu_qr from "../../assets/schedule/tu-qr.png";
import we_qr from "../../assets/schedule/we-qr.png";
import th_qr from "../../assets/schedule/th-qr.png";
import fr_qr from "../../assets/schedule/fr-qr.png";
import sa_qr from "../../assets/schedule/sa-qr.png";
import su_qr from "../../assets/schedule/su-qr.png";
const scheduletry = () => {
  return (
    <div className="schedule-wrapper">
      <div className="heading-team">
        <p>SCHEDULE</p>
      </div>
      <div className="schedule-days-card-wrapper">
        <div className="schedule-single-card image-container">
          <img src={card_bg} alt="" />
          <div className="foreground-image schedule-single-card-content">
            <div>
              <h1>DAY 1</h1>
              <img src={mo_qr} alt="" />
            </div>
            <div className="schedule-card-line"></div>
            <div>
              <div>
                <p>09 : 00 AM</p>
                <p>Inauguration</p>
              </div>
              <div>
                <p>10 : 00 AM</p>
                <p>Introduction to Design</p>
              </div>
              <div>
                <p>03 : 00 PM</p>
                <p>DESIGNAGE - Logo Quiz</p>
              </div>
            </div>
          </div>
        </div>
        <div className="schedule-single-card image-container">
          <img src={card_bg_r} alt="" />
          <div className="foreground-image schedule-single-card-content">
            <div>
              <img src={tu_qr} alt="" />

              <h1>DAY 2</h1>
            </div>
            <div className="schedule-card-line"></div>
            <div>
              <div>
                <p>09 : 00 AM</p>
                <p>Inauguration</p>
              </div>
              <div>
                <p>10 : 00 AM</p>
                <p>Introduction to Design</p>
              </div>
              <div>
                <p>03 : 00 PM</p>
                <p>DESIGNAGE - Logo Quiz</p>
              </div>
            </div>
          </div>
        </div>
        <div className="schedule-single-card image-container">
          <img src={card_bg} alt="" />
          <div className="foreground-image schedule-single-card-content">
            <div>
              <h1>DAY 3</h1>
              <img src={we_qr} alt="" />
            </div>
            <div className="schedule-card-line"></div>
            <div>
              <div>
                <p>09 : 00 AM</p>
                <p>Inauguration</p>
              </div>
              <div>
                <p>10 : 00 AM</p>
                <p>Introduction to Design</p>
              </div>
              <div>
                <p>03 : 00 PM</p>
                <p>DESIGNAGE - Logo Quiz</p>
              </div>
            </div>
          </div>
        </div>
        <div className="schedule-single-card image-container">
          <img src={card_bg_r} alt="" />
          <div className="foreground-image schedule-single-card-content">
            <div>
              <img src={th_qr} alt="" />

              <h1>DAY 4</h1>
            </div>
            <div className="schedule-card-line"></div>
            <div>
              <div>
                <p>09 : 00 AM</p>
                <p>Inauguration</p>
              </div>
              <div>
                <p>10 : 00 AM</p>
                <p>Introduction to Design</p>
              </div>
              <div>
                <p>03 : 00 PM</p>
                <p>DESIGNAGE - Logo Quiz</p>
              </div>
            </div>
          </div>
        </div>
        <div className="schedule-single-card image-container">
          <img src={card_bg} alt="" />
          <div className="foreground-image schedule-single-card-content">
            <div>
              <h1>DAY 5</h1>
              <img src={fr_qr} alt="" />
            </div>
            <div className="schedule-card-line"></div>
            <div>
              <div>
                <p>09 : 00 AM</p>
                <p>Inauguration</p>
              </div>
              <div>
                <p>10 : 00 AM</p>
                <p>Introduction to Design</p>
              </div>
              <div>
                <p>03 : 00 PM</p>
                <p>DESIGNAGE - Logo Quiz</p>
              </div>
            </div>
          </div>
        </div>
        <div className="schedule-single-card image-container">
          <img src={card_bg_r} alt="" />
          <div className="foreground-image schedule-single-card-content">
            <div>
              <img src={sa_qr} alt="" />

              <h1>DAY 6</h1>
            </div>
            <div className="schedule-card-line"></div>
            <div>
              <div>
                <p>09 : 00 AM</p>
                <p>Inauguration</p>
              </div>
              <div>
                <p>10 : 00 AM</p>
                <p>Introduction to Design</p>
              </div>
              <div>
                <p>03 : 00 PM</p>
                <p>DESIGNAGE - Logo Quiz</p>
              </div>
            </div>
          </div>
        </div>
        <div className="schedule-single-card image-container">
          <img src={card_bg} alt="" />
          <div className="foreground-image schedule-single-card-content">
            <div>
              <h1>DAY 7</h1>
              <img src={su_qr} alt="" />
            </div>
            <div className="schedule-card-line"></div>
            <div>
              <div>
                <p>09 : 00 AM</p>
                <p>Inauguration</p>
              </div>
              <div>
                <p>10 : 00 AM</p>
                <p>Introduction to Design</p>
              </div>
              <div>
                <p>03 : 00 PM</p>
                <p>DESIGNAGE - Logo Quiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default scheduletry;
