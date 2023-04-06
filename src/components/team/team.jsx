import React from "react";
import "./team.css";
import headTeam from "../../assets/team-header-img.svg";
import enric from "../../assets/enric.svg";
import amalcp from '../../assets/amalcp.png';
import ajay from "../../assets/ajayvishnu.svg";
import noah from "../../assets/Noah.svg";
import pranav from "../../assets/pranav.svg";
import varsha from "../../assets/Varsha.svg";
import talksession from "../../assets/talksession.svg";
import expo from "../../assets/expo.svg";
import handsonworkshop from "../../assets/handsonworkshop.svg";
import games from "../../assets/games.svg";
import quizes from "../../assets/quizes.svg";

const team = () => {
  return (
    <section id="team">
      <div className="team-wrapper">
        <div className="event-header transition-div-t">
          <p>OUR TEAM</p>
          <img src={headTeam} alt="" />
        </div>
        <div class="container-team">
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                Enric S Neelamkavil <br /> Lead
              </div>
            </div>
          </div>
          <div class="box">
            <img src={amalcp} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                Amal C P <br /> Lead
              </div>
            </div>
          </div>
          <div class="box">
            <img src={ajay} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
               Ajay Vishnu E <br /> Lead
              </div>
            </div>
          </div>
          <div class="box">
            <img src={noah} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                Noah Johny <br /> Lead
              </div>
            </div>
          </div>
          <div class="box">
            <img src={pranav} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                Pranav Madhu <br /> Lead
              </div>
            </div>
          </div>
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                Enric S Neelamkavil <br /> Lead
              </div>
            </div>
          </div>
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                Enric S Neelamkavil <br /> Lead
              </div>
            </div>
          </div>
          <div class="box">
            <img src={varsha} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                Varsha Babu Akkara <br /> Lead
              </div>
            </div>
          </div>
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                Enric S Neelamkavil <br /> Lead
              </div>
            </div>
          </div>
        </div>
        <div className="cd-team-wrapper">
          <div className="cd-left-team">
            <p className="cd-left-team-one">
              WE <span className="text-color">CREATE</span> AND DESIGN.
            </p>
            <p className="cd-left-team-two">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie.
            </p>
          </div>
          <div className="cd-right-team">
            <a className="right-cd-div">
              <img src={talksession} alt="" />
              <p>TALK SESSIONS</p>
            </a>
            <a className="right-cd-div">
              <img src={expo} alt="" />
              <p>EXPO</p>
            </a>
            <a className="right-cd-div">
              <img src={handsonworkshop} alt="" />
              <p>HANDS-ON WORKSHOPS</p>
            </a>
            <a className="right-cd-div">
              <img src={games} alt="" />
              <p>GAMES</p>
            </a>
            <a className="right-cd-div">
              <img src={quizes} alt="" />
              <p>QUIZES</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default team;
