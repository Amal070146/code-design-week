import React from "react";
import "./events.css";
import headEvent from "../../assets/events-head-img.svg";
import { eventAdobe } from "../../assets";
import Eventsingle from "./Eventsingle";

const Events = () => {
  const eventArray = [
    {
      number: `01`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
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
      title: "ADOBE BY CODE",
      image: eventAdobe,
      description1: `Get into the world of Adobe creative suite. Explore Adobe design
    softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.`,
      description2: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
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
    <section id="events">
      <div className="event-wrapper">
        <div className="event-header transition-div">
          <img src={headEvent} alt="" />
          <p>EVENTS</p>
        </div>
        <div className="events-content-wrapper">
          {eventArray.map(
            ({ description1, description2, title, image, number }) => (
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

export default Events;
