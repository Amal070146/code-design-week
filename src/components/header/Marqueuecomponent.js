import React from "react";
import Marquee from "react-fast-marquee";
import { twinkle } from "../../assets";
import './header.css'

const Marqueuecomponent = () => {
  return (
    <div style={{ width: "100vw", padding: "10px" ,backgroundColor:'black'}}>
      <Marquee style={{ width: "100vw" }} gradient={false}>
        <Marqueuesingle />
        <Marqueuesingle />
        <Marqueuesingle />
        <Marqueuesingle />
      </Marquee>
    </div>
  );
};

const Marqueuesingle = () => {
  return (
    <div className="marqueuesinglecomponent">
      <img src={twinkle} />
      <span>DESIGN WEEK 2023</span>
    </div>
  );
};
export default Marqueuecomponent;
