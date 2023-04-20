import React, { useState } from "react";
import "./scheduletry.css";
import card_bg from "../../assets/schedule/card-bg-black.png";
import card_bg_r from "../../assets/schedule/card-bg-black-r.png";
import mo_qr from "../../assets/schedule/mo-qr.png";
import tu_qr from "../../assets/schedule/tu-qr.png";
import we_qr from "../../assets/schedule/we-qr.png";
import th_qr from "../../assets/schedule/th-qr.png";
import fr_qr from "../../assets/schedule/fr-qr.png";
import sa_qr from "../../assets/schedule/sa-qr.png";
import su_qr from "../../assets/schedule/su-qr.png";
const scheduletry = () => {
  const ScheduleArray = [
    {
      image: mo_qr,
      bg: card_bg,
      day: "DAY 1",
      events: [
        {
          time: "09 : 00 AM",
          title: "Inauguration",
        },
        {
          time: "10 : 00 AM",
          title: "Introduction to Design",
        },
        {
          time: "03 : 00 PM",
          title: "DESIGNAGE - Logo Quiz",
        },
      ],
    },
    {
      image: tu_qr,
      bg: card_bg_r,

      day: "DAY 2",
      events: [
        {
          time: "09 : 00 AM",
          title: "ADOBE by CODe -Creative Cloud",
        },
        {
          time: "10 : 00 AM",
          title: "GRAPHICA - Canva",
        },
      ],
    },
    {
      image: we_qr,
      bg: card_bg,
      day: "DAY 3",
      events: [
        {
          time: "09 : 00 AM",
          title: "ADOBE by CODe - Creative Cloud",
        },
        {
          time: "10 : 00 AM",
          title: "GRAPHICA - Canva",
        },
      ],
    },
    {
      image: th_qr,
      bg: card_bg_r,

      day: "DAY 4",
      events: [
        {
          time: "09 : 30 AM",
          title: "ADOBE by CODe - Adobe Xd, Figma, Behance",
        },
        {
          time: "03 : 00 PM",
          title: "GRAPHICA - Figma",
        },
        {
          time: "ALL DAY",
          title: "DESIGN EXPO",
        },
      ],
    },
    {
      image: fr_qr,
      bg: card_bg,

      day: "DAY 5",
      events: [
        {
          time: "09 : 30 AM",
          title: "ADOBE by CODe - Adobe Photoshop, Adobe Illustrator",
        },
        {
          time: "04 : 00 PM",
          title: "GRAPHICA - Adobe Photoshop",
        },
      ],
    },
    {
      image: sa_qr,
      bg: card_bg_r,

      day: "DAY 6",
      events: [
        {
          time: "09 : 30 AM",
          title: "Game Design Workshop - Unity",
        },
        {
          time: "03 : 00 PM",
          title: "DESIGNATHON Inauguration",
        },
        {
          time: "04 : 00 PM",
          title: "DESIGNATHON commences",
        },
      ],
    },
    {
      image: su_qr,
      bg: card_bg,
      day: "DAY 7",
      events: [
        {
          time: "04 : 00 PM",
          title: "DESIGNATHON ends",
        },
        {
          time: "04 : 30 PM",
          title: "Valedictory Ceremony",
        },
      ],
    },
  ];
  return (
    <div className="schedule-wrapper">
      <div className="heading-team">
        <p>SCHEDULE</p>
      </div>
      <div className="schedule-days-card-wrapper">
        {ScheduleArray.map(({ image, day, events,bg }) => (
          <div>
            <div></div>
            <div className="schedule-single-card image-container">
              <img src={bg} alt="" />
              <div className="foreground-image schedule-single-card-content">
                <div>
                  <h1>{day}</h1>
                  <img src={image} alt="" />
                </div>
                <div className="schedule-card-line"></div>
                <div>
                  {events.map(({ time, title }) => (
                    <div>
                      <p>{time}</p>
                      <p>{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default scheduletry;
