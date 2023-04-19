import React, { useState } from "react";
import "./faq.css";
import arrow from "../../assets/designathon/white-down-arrow-faq.png";
import arrowblack from "../../assets/designathon/uparrow-black-faq.png";
import FAQ from "./faq";
const Faq1 = () => {
  const faqArray = [
    {
      heading: "WHAT IS A DESIGNATHON?",
      dots: ".................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "WHAT IS A DESIGNATHON?",
      dots: ".................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "WHAT IS A DESIGNATHON?",
      dots: ".................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "WHAT IS A DESIGNATHON?",
      dots: ".................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "WHAT IS A DESIGNATHON?",
      dots: ".................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
  ];
  const [openpopup, setopenpopup] = useState(false);
  function openPopup() {
    setopenpopup(!openpopup);
  }
  return (
    <div className="faq-wrapper">
      <div className="faq-header">
        <h1>FAQs</h1>
      </div>

      {faqArray.map(({ heading, dots, para }, i) => {
        <FAQ heading={heading} dots={dots} para={para} />;
      })}

      <div
        className="faq-container"
        style={{
          background: openpopup ? "#ffffff" : "#171717",
          color: openpopup ? "#171717" : "#ffffff",
        }}
      >
        <div className="faq-text">
          <h3>WHAT IS A DESIGNATHON?</h3>
          <p>...................................................</p>
        </div>
        <div>
          <a
            onClick={openPopup}
            style={{ display: openpopup ? "none" : "flex" }}
          >
            <img src={arrow} alt="" />
          </a>
        </div>
      </div>
      {openpopup && (
        <div className="pop-up-faq">
          <p>
            No, Registeration for DESIGNATHON by CODe is completely free of
            cost.
          </p>
          <a onClick={openPopup}>
            <img src={arrowblack} alt="" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Faq1;
