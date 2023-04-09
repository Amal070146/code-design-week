import React from "react";
import "./contacts.css";
import headContact from "../../assets/team-header-img.svg";



const Contacts = () => {
  return (
    <section id="contacts">
      <div className="contacts-wrapper">
        <div className="event-header transition-div-c">
          <p>CONTACT</p>
          <img src={headContact} alt="" />
        </div>
        
      </div>
    </section>
  );
};

export default Contacts;
