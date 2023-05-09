import React from "react";
import "./Events.css";
import Contacts from "../../components/contact/Contacts";
import eventAdobe from "../../assets/Events-image/event-p1.png";
import event1 from "../../assets/Events-image/event1.png";
import event2 from "../../assets/Events-image/event2.png";
import event3 from "../../assets/Events-image/event3.png";
import Eventsingles from "./Eventsingles";
import Navbar from "../../components/navbar/Navbar";
import CopyRight from "../../components/copyright/CopyRight";
import e_card from "../../assets/Events-image/e-card-main.png";
import des from "../../assets/Events-image/bg-designaton.png";
import arrow_event from "../../assets/Events-image/event-view-arrow.png";
import qr from "../../assets/Events-image/qr.png";
import logo from "../../assets/cdw-logo.svg";
import qr_event from "../../assets/Events-image/qr-event.png";
import event_arrow from "../../assets/Events-image/event-view-arrow.png";
import des_bg_mob from "../../assets/Events-image/des-mob-bg.png";

import coming from "../../assets/Events-image/coming.png";

const event = () => {
  const eventArray = [
    {
      forms: `https://bit.ly/cdwmascot`,
      title: "MASCOT DESIGN CHALLENGE",
      image: event1,
      date: "20 MAY 2023",
      time: "12:00PM",
      venue: "ONLINE",
      description: `Find your inspiration💡 with creative mascot and let your creativity soar!✨ Design a creative mascot for the CODe Design Week, give it an apt name. You can use any medium of your choice from traditional hand-drawn sketches 🎨 to digital illustrations👾You could even use AI generators like DALL-E or Mid journey etc....
`,
    },
    {
      forms: `https://bit.ly/cdwfthed`,
      title: "FIND THE DESIGN",
      image: event3,
      date: "23 MAY 2023",
      time: "12:00PM",
      venue: "OFFLINE",
      description: `Are your eyes 👀 fast enough? Let's find out ‼ You will have to find the exact poster from a set of posters within ⿣ minutes. Lucky or not , give it a shot 😌on Find The Design Challenge by CODe Design Week.`,
    },
    {
      forms: `https://bit.ly/cdwdtoc`,
      title: "DESIGN TO CODE",
      image: event2,
      date: "25 MAY 2023",
      time: "12:00PM",
      venue: "OFFLINE",
      description: `Shout out to all the programmers out there!! 🤩Design week is all about design. But we've something for you too. 😉 The Design to Code challenge is here! Develop a website with the UI Design given. The fastest and the cleanest website wins! 🥳 Feel free to dig into one of the languages of your comfort. 😌`,
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
                <a href="/designathon">
                  <img src={arrow_event} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-event-head" style={{ color: "white" }}>
          EVENTS
        </div>
        <div className="events-single-content-wrapper">
          <div className="mobile-des-card">
            <div className="card-des image-container">
              <img src={des_bg_mob} alt="" />
              <div className="card-des-content foreground-image">
                <p>FOCUS. INTERACT. CREATE.</p>
                <h1>DESIGNATHON</h1>
                <p>by CODe</p>
              </div>
            </div>
            <div className="popup-card-des image-container">
              <img
                style={{ filter: "grayscale(100%)" }}
                src={des_bg_mob}
                alt=""
              />
              <div className="popup-card-des-content foreground-image">
                <img src={logo} />
                <h1>Designathon</h1>
                <h2>27-28 MAY 2023</h2>
                <img src={qr_event} />
                <p>
                  Designathon, or design-hackathon, is an event where you're
                  asked to design a solution for a given problem within the
                  given 24 hours. No coding is involved. DESIGNATHON by CODe is
                  the flagship event of the CODe Design Week 2023, which is a
                  national event conducted on May 27 & 28.
                </p>
                <a href="/designathon">
                  REGISTER <img src={event_arrow} alt="sjncjui" />
                </a>
              </div>
            </div>
          </div>
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
          <div className="single-event-card-desk">
            <div>
              <img src={coming} />
            </div>
          </div>
        </div>
      </div>
      <Contacts />
      <CopyRight />
    </section>
  );
};

export default event;
