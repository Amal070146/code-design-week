import React from "react";
import "./events.css";
import headEvent from "../../assets/events-head-img.svg";
import eventAdobe from "../../assets/Events-image/adobe-logo.png";
import Eventsingle from "./Eventsingle";
import graphica from '../../assets/Events-image/GRAPHICA Logo.png'
import Designathon from '../../assets/Events-image/designaton-logo.png'
import arrow from '../../assets/Events-image/event-view-arrow.png'
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
      <div className="event-wrapper">
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
      </div>
    </section>
  );
};

export default Events;
