import React from "react";
import "./team.css";
import headTeam from "../../assets/team-header-img.svg";
import enric from "../../assets/enric.svg";
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
              <div class="name-team">Enric S Neelamkavil</div>
              <div class="buttons-team">
                <button>Button 1</button>
                <button>Button 2</button>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">Enric S Neelamkavil</div>
              <div class="buttons-team">
                <button>Button 1</button>
                <button>Button 2</button>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">Enric S Neelamkavil</div>
              <div class="buttons-team">
                <button>Button 1</button>
                <button>Button 2</button>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">Enric S Neelamkavil</div>
              <div class="buttons-team">
                <button>Button 1</button>
                <button>Button 2</button>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">Enric S Neelamkavil</div>
              <div class="buttons-team">
                <button>Button 1</button>
                <button>Button 2</button>
              </div>
            </div>
          </div>
          <div class="box">
            <img src={enric} alt="" />
            <div class="name-tag-team">
              <div class="name-team">Enric S Neelamkavil</div>
              <div class="buttons-team">
                <button>Button 1</button>
                <button>Button 2</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cd-team-wrapper">
          <div className="cd-left-team">
            <p>WE CREATE AND DESIGN.</p>
            <p>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie.
            </p>
          </div>
          <div className="cd-right-team">
            <div className="right-cd-div">
              <img src="" alt="" />
              <p>TALK SESSIONS</p>
            </div>
            <div className="right-cd-div">
              <img src="" alt="" />
              <p>EXPO</p>
            </div>
            <div className="right-cd-div">
              <img src="" alt="" />
              <p>HANDS-ON WORKSHOPS</p>
            </div>
            <div className="right-cd-div">
              <img src="" alt="" />
              <p>GAMES</p>
            </div>
            <div className="right-cd-div">
              <img src="" alt="" />
              <p>QUIZES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default team;
