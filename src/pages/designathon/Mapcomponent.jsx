import React from "react";
import { CiLocationOn } from "react-icons/ci";

function Mapcompoenet() {
  return (
    <div
      style={{
        width: "100%",
        height: "40vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3vw",
        padding: "10px",
        gap: "20px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "3vw" }} className="faq-header">
        VENUE
      </h1>

      <span
        style={{
          color: "white",
          fontSize: "1.6vw",
          fontFamily: "NeueMachinaRegular",
        }}
      >
        <CiLocationOn />
        Christ College Road, Irinjalakuda, Kerala 680125
      </span>
      <iframe
        src="https://www.google.com/maps/@10.3787202,76.2313719,13.84z/data=!4m6!3m5!1s0x3ba7f65a7d7bc725:0x22dc855ba6cace68!8m2!3d10.357801!4d76.2127088!16s%2Fm%2F03c5zsv?hl=en"
        style={{
          border: "0",
          width: "100%",
          maxWidth: "80vw",
          height: "20vw",
          borderRadius: "15px",
        }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Mapcompoenet;
