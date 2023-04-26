import React from "react";
import "./Events.css";
import Contacts from "../../components/contact/Contacts";
import eventAdobe from "../../assets/Events-image/event-p1.png";
import Eventsingles from "./Eventsingles";
import Navbar from "../../components/navbar/Navbar";
import CopyRight from "../../components/copyright/CopyRight";
import e_card from "../../assets/Events-image/e-card-main.png";
import des from '../../assets/Events-image/bg-designaton.png'
import arrow_event from "../../assets/Events-image/event-view-arrow.png";
import qr from "../../assets/Events-image/qr.png";
const event = () => {
  const eventArray = [
    {
      forms: `http://bit.ly/cdwmascot`,
      title: "MASCOT DESIGN CHALLENGE",
      image: eventAdobe,
      date: "28 APR 2023",
      time: "12:00PM",
      venue: "ONLINE",
      description: `Design a creative mascot for the CODe Design Week, give it an apt name. You can use any medium of your choice from traditional hand-drawn sketches to digital illustrations!! or you could even use AI generators like DALL-E or Mid journey for designing one for you!`,
    },
    {
      forms: `http://bit.ly/cdwdesigntocode`,
      title: "DESIGN TO CODE",
      image: eventAdobe,
      date: "28 APR 2023",
      time: "12:00PM",
      venue: "ONLINE",
      description: `Are you a programmer? This event is for you. Develop a website with the given UI Design. The first one to develop the cleanest website wins! There are no language restrictions.`,
    },
    {
      forms: `http://bit.ly/cdwfindthedesign`,
      title: "FIND THE DESIGN",
      date: "28 APR 2023",
      image: eventAdobe,
      time: "12:00PM",
      venue: "ONLINE",
      description: ` You will be provided a set of folders with numerous posters. Find the displayed poster accurately in 3 minutes. The fastest one to find the poster within the time limit will be recognized as the winner.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "28 APR 2023",
      image: eventAdobe,
      time: "12:00PM",
      venue: "ONLINE",
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "DESIGNATHON.",
      date: "28 APR 2023",
      image: eventAdobe,
      time: "12:00PM",
      venue: "ONLINE",
      description: `Designathon, or design-hackathon, is an event where you're asked to design a solution for a given problem within the given 24hrs. No coding is involved.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "28 APR 2023",
      image: eventAdobe,
      time: "12:00PM",
      venue: "ONLINE",
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "28 APR 2023",
      image: eventAdobe,
      time: "12:00PM",
      venue: "ONLINE",
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "28 APR 2023",
      image: eventAdobe,
      time: "12:00PM",
      venue: "ONLINE",
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "28 APR 2023",
      image: eventAdobe,
      time: "12:00PM",
      venue: "ONLINE",
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
    {
      forms: `https://www.beachhack.in/`,
      title: "ADOBE BY CODE",
      date: "28 APR 2023",
      image: eventAdobe,
      time: "12:00PM",
      venue: "ONLINE",
      description: ` Adobe by Code is a series of workshops in which we ablah bah blah
    balaah. (1 logo + korch text) font size ithrem venam ith pole
    enthelum okke thatti vitta mathi ivde. aa event description pole.`,
    },
  ];

  return (
    <section className="body-wrapper">
      <Navbar />
      <div className="events-wrapper-main">
        <div className="aboutus-header">
          <h1>EVENTS</h1>
        </div>
        <div className="event-card-main-des image-container">
          <img src={e_card} alt="" />
          <div className="e-card-content image-container foreground-image">
            <img src={des} alt="" />
            <div className="e-card-content-head foreground-image">
              <p>FOCUS. INTERACT. CREATE.</p>
              <h1>DESIGNATHON</h1>
              <p>by CODe</p>
            </div>
            <div className="e-card-content-p">
              <div className="e-card-content-p-n1">
                <p>
                  Designathon, or design-hackathon, is an event where you're
                  asked to design a solution for a given problem within the
                  given 24 hours. No coding is involved. DESIGNATHON by CODe is
                  the flagship event of the CODe Design Week 2023, which is a
                  national event conducted on May 27 & 28.
                </p>
              </div>
              <div className="e-card-content-p-n2">
                <h3>27-28</h3>
                <h4>MAY 2023</h4>
              </div>
              <div className="e-card-content-p-n3">
                <img src={qr} alt="" />
                <img src={arrow_event} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="events-single-content-wrapper">
          {eventArray.map(
            ({ description, title, image, forms, date, time, venue }, i) => (
              <Eventsingles
                description={description}
                image={image}
                forms={forms}
                title={title}
                date={date}
                time={time}
                venue={venue}
              />
            )
          )}
        </div>
      </div>
      <Contacts />
      <CopyRight />
    </section>
  );
};

export default event;
