import React from "react";
import "./team.css";
import enric from "../../assets/team/enric.png";
import amalcp from "../../assets/team/amalcp.png";
import ajay from "../../assets/team/ajayvishnu.png";
import noah from "../../assets/team/Noah .png";
import pranav from "../../assets/team/pranav.svg";
import jaivin from "../../assets/team/jaivin.png";
import jasrin from "../../assets/team/jasrin.png";
import theresa from "../../assets/team/theresa.png";
import varsha from "../../assets/team/varsha.png";


const team = () => {
  return (
    <section id="team">
      <div className="team-wrapper">
        <div className="heading-team">
          <p>OUR TEAM</p>
        </div>
        <div class="container-team">
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Enric S Neelamkavil</p>{" "}
                <p className="position-team-membere">President, CODe</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={amalcp} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Amal C P</p>{" "}
                <p className="position-team-membere">Lead Organizer</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={ajay} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Ajay Vishnu E</p>{" "}
                <p className="position-team-membere">Event Head</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={noah} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Noah Johny</p>{" "}
                <p className="position-team-membere">Graphic Designer</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={pranav} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Pranav Madhu</p>
                <p className="position-team-membere">Technical Lead</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={varsha} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Varsha Babu Akkara</p>
                <p className="position-team-membere">Sponsorship Lead</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={jasrin} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Mohammed Jasrin</p>
                <p className="position-team-membere">Content Lead</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={theresa} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Theresa T S</p>{" "}
                <p className="position-team-membere">Outreach Lead</p>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={jaivin} alt="" />
            <div class="name-tag-team">
              <div class="name-team">
                <p className="name-team-member">Jaivin Joseph</p>{" "}
                <p className="position-team-membere">Decoration Lead</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default team;
