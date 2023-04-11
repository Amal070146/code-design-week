import React from "react";
import Contacts from "../../components/contact/Contacts";
import headEvent from "../../assets/team-head-img.svg";
import eventAdobe from "../../assets/Events-image/event-1.png";
import Navbar from "../../components/navbar/Navbar";
import CopyRight from "../../components/copyright/CopyRight";
import designtocode from "../../assets/Events-image/designtocode.png";
import findthedesign from "../../assets/Events-image/findthedesign.png";
const designathon = () => {
 

  return (
    <section className="body-wrapper">
      <Navbar />
      <div className="events-wrapper-main">
        <div className="heading-team" style={{marginBottom:'50PX'}}>
          <p>DESIGNATHON</p>
        </div>
        
        <div>coming soon</div>
      </div>
      <Contacts />
      <CopyRight />
    </section>
  );
};

export default designathon;
