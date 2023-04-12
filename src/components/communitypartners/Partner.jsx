import React from "react";
import "./partners.css";
import tinkerhub from '../../assets/communitypartners/tinkerhub.png'
import ieee from "../../assets/communitypartners/ieee.png";
import iedc from "../../assets/communitypartners/iedc.png";
import gtech from "../../assets/communitypartners/gtech.png";
import csi from "../../assets/communitypartners/csi.png";
const partners = () => {
  return (
    <div className="partners-wrapper-main">
      <div className="heading-team">
        <p>COMMUNITY PARTNERS</p>
      </div>
      <div className="partners-logo-wrapper">
        {/* <a href="">
          <img src={gtech} alt="" />
        </a> */}
        <a href="">
          <img src={tinkerhub} alt="" />
        </a>
        <a href="">
          <img src={iedc} alt="" />
        </a>
        <a href="">
          <img src={ieee} alt="" />
        </a>
        <a href="">
          <img src={csi} alt="" />
        </a>
      </div>
    </div>
  );
};

export default partners;
