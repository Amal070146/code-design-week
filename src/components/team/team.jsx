import React from 'react'
import './team.css'
import headTeam from '../../assets/team-header-img.svg'

const team = () => {
  return (
    <section id="team">
      <div className="team-wrapper">
        <div className="event-header transition-div-t">
          <p>OUR TEAM</p>
          <img src={headTeam} alt="" />
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
}

export default team