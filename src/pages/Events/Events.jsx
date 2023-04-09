import React from "react";
import "./Events.css";
import headEvent from "../../assets/team-head-img.svg";
import { eventAdobe } from "../../assets";
import Eventsingle from "../../components/events/Eventsingle";
import Navbar from '../../components/navbar/Navbar'

const event = () => {
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
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      number: `03`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      number: `04`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      number: `05`,
      title: "DESIGNATHON.",
      image: eventAdobe,
      description1: `DESIGNATHON by CODe is the flagship event of the CODe Design Week 2023, which is a national event conducted on May 27 & 28.`,
      description2: `Designathon, or design-hackathon, is an event where you're asked to design a solution for a given problem within the given 24hrs. No coding is involved.`,
    },
    {
      number: `06`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      number: `07`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      number: `08`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      number: `09`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      number: `10`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
  ];

  return (
    <section className="body-wrapper" id="events">
      <Navbar />
      <div className="events-wrapper">
        <div className="events-header transition-div-e">
          <p>EVENTS</p>
          <img src={headEvent} alt="" />
        </div>
        <div className="events-content-wrapper">
          {eventArray.map(
            ({ description1, description2, title, image, number }, i) => (
              <Eventsingle
                description1={description1}
                description2={description2}
                image={image}
                number={number}
                title={title}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default event;
