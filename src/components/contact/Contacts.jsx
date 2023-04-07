import React from "react";
import "./contacts.css";
import headContact from "../../assets/team-header-img.svg";
import cdw from '../../assets/cdw-logo.svg'
import insta  from '../../assets/insta-logo.png'
import email from '../../assets/email.logo.png'
import phone from '../../assets/phone-logo.png'


const Contacts = () => {
  return (
    <section id="contacts">
      <div className="contacts-wrapper">
        <div className="event-header transition-div-c">
          <p>CONTACT</p>
          <img src={headContact} alt="" />
        </div>
        <div className="contact-content-wrapper">
          <div className="contact-email">
            <img src={email} alt="" />
            <div>
              <p>codedesignweek@gmail.com</p>
              <p>code@cce.edu.in</p>
            </div>
          </div>
          <div className="contact-phone">
            <img src={phone} alt="" />
            <div>
              <p>+91 94007 43624</p>
              <p>+91 79940 43754</p>
            </div>
          </div>
          <div className="contact-social">
            <a href="#header">
              <img src={cdw} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contacts;
