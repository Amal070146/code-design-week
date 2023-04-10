import React from "react";
import "./Events.css";
import headEvent from "../../assets/team-head-img.svg";
import eventAdobe from "../../assets/Events-image/event-1.png";
import Eventsingles from "./Eventsingles";
import Navbar from "../../components/navbar/Navbar";
import CopyRight from "../../components/copyright/CopyRight";
import designtocode from '../../assets/Events-image/designtocode.png'

const event = () => {
  const eventArray = [
    {
      forms: `http://bit.ly/cdwmascot`,
      title: "MASCOT DESIGN CHALLENGE",
      image: eventAdobe,
      date: "TILL APR 30",
      description: `Design a creative mascot for the CODe Design Week, give it an apt name. You can use any medium of your choice from traditional hand-drawn sketches to digital illustrations!! or you could even use AI generators like DALL-E or Mid journey for designing one for you!`,
    },
    {
      forms: `http://bit.ly/cdwdesigntocode`,
      title: "DESIGN TO CODE",
      image: designtocode,
      date: "23 MAY | 03:00 PM",
      description: `Are you a programmer? This event is for you. Develop a website with the given UI Design. The first one to develop the cleanest website wins! There are no language restrictions.`,
    },
    {
      forms: `http://bit.ly/cdwfindthedesign`,
      title: "FIND THE DESIGN",
      date: "23 MAY | 03:00 PM",
      image: eventAdobe,
      description: ` You will be provided a set of folders with numerous posters. Find the displayed poster accurately in 3 minutes. The fastest one to find the poster within the time limit will be recognized as the winner.`,
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
          {eventArray
            .slice(0, 3)

            .map(({ description, title, image, forms, date }, i) => (
              <Eventsingles
                description={description}
                image={image}
                forms={forms}
                title={title}
                date={date}
              />
            ))}
        </div>
      </div>
      <CopyRight />
    </section>
  );
};

export default event;
