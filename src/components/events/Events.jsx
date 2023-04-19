import React from "react";
import "./events.css";
import headEvent from "../../assets/events-head-img.svg";
import eventAdobe from "../../assets/Events-image/adobe-logo.png";
import Eventsingle from "./Eventsingle";
import graphica from "../../assets/Events-image/GRAPHICA Logo.png";
import Designathon from "../../assets/Events-image/designaton-logo.png";
import arrow from "../../assets/Events-image/event-view-arrow.png";

import expore_events from "../../assets/explore-events-bg.png";
import schedule_bg from "../../assets/schedule-bg-rec.png";
import know_more from "../../assets/know-more-bg.png";
import barcodeblack from "../../assets/barcode-black.png";
import barcodewhite from "../../assets/barcode.png";
import eventcover from "../../assets/explore-event-cover.png";
import schedulecover from "../../assets/schedule-cover.png";
import downarrowblack from "../../assets/down-arrow-black-pink.png";
import downarrowwhite from "../../assets/down-arrow.png";
import knowmoretext from "../../assets/know-more-text.png";
import talksession from "../../assets/talksession.svg";
import expo from "../../assets/expo.svg";
import handsonworkshop from "../../assets/handsonworkshop.svg";
import games from "../../assets/games.svg";
import quizes from "../../assets/quizes.svg";

import codelogo from "../../assets/code-logo.png";
import ccelogo from "../../assets/christ-logo.png";
const Events = () => {
  return (
    <section id="events">
      {/* <div className="event-wrapper">
       <div className="event-header transition-div">
          <img src={headEvent} alt="" />
          <p>EVENTS</p>
        </div> 
         <div className="events-content-wrapper">
          {eventArray
            .slice(0, 3)
            .map(({ description1, description2, title, image, number }, i) => (
              <Eventsingle
                description1={description1}
                description2={description2}
                image={image}
                number={number}
                title={title}
              />
            ))}
        </div> 

         <div className="events-view-button">
          <a href="/events">
            <h3>EXPLORE MORE EVENTS</h3>
            <img src={arrow} alt="" />
          </a>
        </div> 
      </div> */}
      <div className="event-card-wrapper">
        <a href="/events">
          <div className="explore-events image-container">
            <img className="bg-explore-events" src={expore_events} alt="" />
            <div className="explore-events-content-wrapper foreground-image">
              <div>
                <img src={eventcover} alt="" />
              </div>
              <div className="explore-events-content-text">
                <div>
                  <p className="text-explore-our">EXPLORE OUR</p>
                  <p className="text-events">EVENTS</p>
                </div>
                <div className="barcode-event-wrapper">
                  <p>
                    Did you know that CODe Design Week has a variety of events
                    happening? Get to know more about them by clicking here.
                  </p>
                  <div className="barcode-line"></div>
                  <div>
                    <img
                      className="barcode-w-event"
                      src={barcodewhite}
                      alt=""
                    />
                    <img
                      className="arrow-w-event"
                      src={downarrowwhite}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="know-schedule-wrapper ">
          <a href="/schedule">
            <div className="schedule-bg-wrapper image-container">
              <img src={schedule_bg} alt="" />

              <div className="schedule-container-wrapper foreground-image">
                <img src={schedulecover} alt="" />
                <div className="schedule-container-text">
                  <div>
                    <p className="schedule-view-event">VIEW EVENT</p>
                    <p className="schedule-card-name">SCHEDULE</p>
                  </div>
                  <div className="barcode-wrapper-schedule">
                    <p>
                      The CODe Design Week is fully packed with fun &
                      Entertainment! You'll find the complete event schedule
                      here.
                    </p>
                    <div className="schedule-line-bg"></div>
                    <div>
                      <img
                        className="barcode-w-schedule"
                        src={barcodeblack}
                        alt=""
                      />
                      <img
                        className="arrow-w-schedule"
                        src={downarrowblack}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://bit.ly/cdwpitch" target="_blank">
            <div className="know-more-wrapper image-container">
              <img src={know_more} alt="" />
              <img className="foreground-image" src={knowmoretext} alt="" />
            </div>
          </a>
        </div>
      </div>
      <div className="cd-team-wrapper">
        <div className="cd-left-team">
          <p className="cd-left-team-one">
            WE <span className="text-color">CREATE</span> AND DESIGN.
          </p>
          <p className="cd-left-team-two">
            If you love design, you want to pursue your career in design, CODe
            will help you build up your DESIGN skills.
          </p>
        </div>
        <div className="cd-right-team">
          <a className="right-cd-div">
            <img src={talksession} alt="" />
            <p>TALK SESSIONS</p>
          </a>
          <a className="right-cd-div">
            <img src={expo} alt="" />
            <p>EXPO</p>
          </a>
          <a className="right-cd-div">
            <img src={handsonworkshop} alt="" />
            <p>HANDS-ON WORKSHOPS</p>
          </a>
          <a className="right-cd-div">
            <img src={games} alt="" />
            <p>GAMES</p>
          </a>
          <a className="right-cd-div">
            <img src={quizes} alt="" />
            <p>QUIZES</p>
          </a>
        </div>
      </div>
      <div className="support-org-wrapper">
        <div className="logo-wrapper-support">
          <img className="codelogo" src={codelogo} alt="" />
          <img className="ccelogo" src={ccelogo} alt="" />
        </div>
        <div>
          <p className="text-colors">SUPPORTING</p>
          <p>ORGANIZATIONS</p>
        </div>
      </div>
    </section>
  );
};

export default Events;
