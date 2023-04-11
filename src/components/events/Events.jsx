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
const Events = () => {
  const eventArray = [
    {
      number: `01`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design softwares such as Ps, Ai, Id, Xd, Pr, Ae and so on.`,
      description2: ` Adobe by Code is a series of talk sessions, introducing you into the Adobe creative suite which focuses on design. The sessions are of Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Xd, Adobe Premiere Pro & Adobe After Effects`,
    },
    {
      number: `02`,
      title: "GRAPHICA",
      image: graphica,
      description1: `Graphica opens you the wider possibilities of Graphic Design & UI/UX Designing using Canva, Adobe Photoshop & Figma.`,
      description2: ` Graphica is taking you to a whole new world of Design. It is a series of hands-on workshops using softwares such as Canva, Photoshop & Figma. Building from the base till the extreme along with mentoring support.`,
    },
    {
      number: `03`,
      title: "DESIGNATHON.",
      image: Designathon,
      description1: `DESIGNATHON by CODe is the flagship event of the CODe Design Week 2023, which is a national event conducted on May 27 & 28.`,
      description2: `Designathon, or design-hackathon, is an event where you're asked to design a solution for a given problem within the given 24hrs. No coding is involved.`,
    },
  ];

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
          <a href="">
            <div className="know-more-wrapper image-container">
              <img src={know_more} alt="" />
              <img className="foreground-image" src={knowmoretext} alt="" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
