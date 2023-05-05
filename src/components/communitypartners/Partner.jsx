import React from "react";
import "./partners.css";
import tinkerhub from "../../assets/communitypartners/tinkerhub.png";
import ieee from "../../assets/communitypartners/ieee.png";
import iedc from "../../assets/communitypartners/iedc.png";
import gtech from "../../assets/communitypartners/gtech.png";
import fundesign from '../../assets/communitypartners/fundesign.png'
import csi from "../../assets/communitypartners/csi.png";
import bg_design from "../../assets/designaton-bg-card.png";
import whitecard from "../../assets/white-cut-rect.png";
import uparrow from "../../assets/pink-up-arrow.png";
const partners = () => {
  return (
    <div className="partners-wrapper-main">
      <div className="designathon-card-wrapper image-container">
        <img src={bg_design} alt="" />
        <div className="foreground-image designathon-card">
          <div className="designathon-card-content">
            <p>FOCUS. INTERACT. CREATE.</p>
            <p>DESIGNATHON</p>
            <p className="by-code">by CODe</p>
          </div>

          <a href="/designathon">
            <div className="participation-card image-container">
              <img src={whitecard} alt="" />
              <div className="foreground-image">
                <p>PARTICIPATE</p>
                <img src={uparrow} alt="" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="heading-team">
        <p>PARTNERS</p>
      </div>
      <div className="partners-logo-wrapper">
        <a href="https://mulearn.org">
          <img src={gtech} alt="" />
        </a>
        <a href="https://fundesign.netlify.app">
          <img src={fundesign} alt="" />
        </a>
        <a href="https://iedc.cce.edu.in/">
          <img src={iedc} alt="" />
        </a>
        <a href="https://cce.edu.in/department/EEE/professionalBodies">
          <img src={ieee} alt="" />
        </a>
        <a href="https://cce.edu.in/department/CSE/professionalBodies">
          <img src={csi} alt="" />
        </a>
      </div>
    </div>
  );
};

export default partners;
