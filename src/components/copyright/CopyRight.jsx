import React from "react";
import '../contact/contacts.css'
import cdw from "../../assets/cdw-logo.svg";
import insta from "../../assets/insta-logo.png";
import email from "../../assets/email.logo.png";
import phone from "../../assets/phone-logo.png";

const CopyRight = () => {
  return (
    <>
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
          <a href="https://www.instagram.com/codedesignweek/">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
      <div className="copy-right-wrapper">
        <div className="line-contact"></div>
        <div className="copy-right-contact">
          <div>
            <p>
              Copyright © 2023 Community Of Developers. All Rights Reserved.
            </p>
          </div>
          <div className="copy-right-contact-right">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
