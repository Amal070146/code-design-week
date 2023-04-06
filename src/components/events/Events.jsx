import React from "react";
import "./events.css";
import headEvent from "../../assets/events-head-img.svg";
import arrow from "../../assets/arrow-no-bg.svg";
import adobe from "../../assets/adobe-logo.svg";

const Events = () => {
  function openPopup(id) {
    console.log("hello");
    // document.getElementById.style.display = "flex";
  }

  function closePopup(id) {
    // document.getElementById.style.display = "none";
  }
  return (
    <section id="events">
      <div className="event-wrapper">
        <div className="event-header transition-div">
          <img src={headEvent} alt="" />
          <p>EVENTS</p>
        </div>
        <div className="events-content-wrapper">
          <div className="events-content-div">
            <div className="events-content-div-left">
              <p className="number-event">01</p>
              <p className="heading-events">ADOBE BY CODE</p>
            </div>
            <div className="events-content-div-right">
              <p>
                Get into the world of Adobe creative suite. Explore Adobe design
                softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.
              </p>

              <button type="button" className="openpopup" onclick={openPopup()}>
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>{" "}
          <div class="form-popup" id="1">
            <div class="form-container">
              <img src={adobe} alt="" />
              <div>
                <p>
                  Adobe by Code is a series of workshops in which we ablah bah
                  blah balaah. (1 logo + korch text) font size ithrem venam ith
                  pole enthelum okke thatti vitta mathi ivde. aa event
                  description pole.
                </p>
                <button type="button" class="btn cancel" onclick={closePopup()}>
                  Show less
                </button>
              </div>
            </div>
          </div>
          <div className="line-event"></div>
          <div className="events-content-div">
            <div className="events-content-div-left">
              <p className="number-event">02</p>
              <p className="heading-events">UNDERSTANDING BRIEF</p>
            </div>
            <div className="events-content-div-right">
              <p>
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan.
              </p>

              <button type="button" className="openpopup" onclick={openPopup()}>
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>{" "}
          <div class="form-popup" id="1">
            <div class="form-container">
              <img src={adobe} alt="" />
              <div>
                <p>
                  Adobe by Code is a series of workshops in which we ablah bah
                  blah balaah. (1 logo + korch text) font size ithrem venam ith
                  pole enthelum okke thatti vitta mathi ivde. aa event
                  description pole.
                </p>
                <button type="button" class="btn cancel" onclick={closePopup()}>
                  Show less
                </button>
              </div>
            </div>
          </div>
          <div className="line-event"></div>
          <div className="events-content-div">
            <div className="events-content-div-left">
              <p className="number-event">03</p>
              <p className="heading-events">UNDERSTANDING BRIEF</p>
            </div>
            <div className="events-content-div-right">
              <p>
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan.
              </p>

              <button type="button" className="openpopup" onclick={openPopup()}>
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>{" "}
          <div class="form-popup" id="1">
            <div class="form-container">
              <img src={adobe} alt="" />
              <div>
                <p>
                  Adobe by Code is a series of workshops in which we ablah bah
                  blah balaah. (1 logo + korch text) font size ithrem venam ith
                  pole enthelum okke thatti vitta mathi ivde. aa event
                  description pole.
                </p>
                <button type="button" class="btn cancel" onclick={closePopup()}>
                  Show less
                </button>
              </div>
            </div>
          </div>
          <div className="line-event"></div>
          <div className="events-content-div">
            <div className="events-content-div-left">
              <p className="number-event">04</p>
              <p className="heading-events">ADOBE BY CODE</p>
            </div>
            <div className="events-content-div-right">
              <p>
                Get into the world of Adobe creative suite. Explore Adobe design
                softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.
              </p>

              <button type="button" className="openpopup" onclick={openPopup()}>
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>{" "}
          <div class="form-popup" id="1">
            <div class="form-container">
              <img src={adobe} alt="" />
              <div>
                <p>
                  Adobe by Code is a series of workshops in which we ablah bah
                  blah balaah. (1 logo + korch text) font size ithrem venam ith
                  pole enthelum okke thatti vitta mathi ivde. aa event
                  description pole.
                </p>
                <button type="button" class="btn cancel" onclick={closePopup()}>
                  Show less
                </button>
              </div>
            </div>
          </div>
          <div className="line-event"></div>
          <div className="events-content-div">
            <div className="events-content-div-left">
              <p className="number-event">05</p>
              <p className="heading-events">ADOBE BY CODE</p>
            </div>
            <div className="events-content-div-right">
              <p>
                Get into the world of Adobe creative suite. Explore Adobe design
                softwares such as Ps, Ai, Id, Xd, Pr, Ae etc.
              </p>

              <button type="button" className="openpopup" onclick={openPopup()}>
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>{" "}
          <div class="form-popup" id="1">
            <div class="form-container">
              <img src={adobe} alt="" />
              <div>
                <p>
                  Adobe by Code is a series of workshops in which we ablah bah
                  blah balaah. (1 logo + korch text) font size ithrem venam ith
                  pole enthelum okke thatti vitta mathi ivde. aa event
                  description pole.
                </p>
                <button type="button" class="btn cancel" onclick={closePopup()}>
                  Show less
                </button>
              </div>
            </div>
          </div>
          <div className="line-event"></div>
        </div>
      </div>
    </section>
  );
};

export default Events;
