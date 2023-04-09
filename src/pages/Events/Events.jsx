import React from "react";
import "./Events.css";
import headEvent from "../../assets/team-head-img.svg";
import eventAdobe from "../../assets/Events-image/event-1.png";
import Eventsingles from "./Eventsingles";
import Navbar from "../../components/navbar/Navbar";

const event = () => {
  const eventArray = [
    {
      forms: `https://www.beachhack.in/`,
      title: "MASCOT DESIGN CHALLENGE",
      image: eventAdobe,
      date: "TILL APR 30 | 11:59AM",
      description: ` Adobe by Code is a series of talk sessions, introducing you into the Adobe creative suite which focuses on design. The sessions are of Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe Xd, Adobe Premiere Pro & Adobe After Effects`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      image: eventAdobe,
      date: "TILL APR 30 | 11:59AM",
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "TILL APR 30 | 11:59AM",
      image: eventAdobe,
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "TILL APR 30 | 11:59AM",
      image: eventAdobe,
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "DESIGNATHON.",
      date: "TILL APR 30 | 11:59AM",
      image: eventAdobe,
      description: `Designathon, or design-hackathon, is an event where you're asked to design a solution for a given problem within the given 24hrs. No coding is involved.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "TILL APR 30 | 11:59AM",
      image: eventAdobe,
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "TILL APR 30 | 11:59AM",
      image: eventAdobe,
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "TILL APR 30 | 11:59AM",
      image: eventAdobe,

      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "TILL APR 30 | 11:59AM",
      image: eventAdobe,
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "TILL APR 30 | 11:59AM",
      image: eventAdobe,
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
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
            ({ description, title, image, forms,date }, i) => (
              <Eventsingles
                description={description}
                image={image}
                forms={forms}
                title={title}
                date={date}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default event;
