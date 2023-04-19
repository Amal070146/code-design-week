import React, { useState } from "react";
import "./faq.css";
import arrow from "../../assets/designathon/white-down-arrow-faq.png";
import arrowblack from "../../assets/designathon/uparrow-black-faq.png";
import FAQ from "./faq";
const Faq1 = () => {
  const faqArray = [
    {
      heading: "WHAT IS A DESIGNATHON?",
      dots: "....................................................................................................................................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "WHAT IS THE TEAM SIZE?",
      dots: ".......................................................................................................................................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "WHAT IS THE FINAL PRODUCT OF DESIGNATHON?",
      dots: ".............................................................................................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "HOW CAN I GET SELECTED?",
      dots: "....................................................................................................................................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "IS THERE A REGISERATION FEE?",
      dots: ".............................................................................................................................................",
      para: "No, Registeration for DESIGNATHON by CODe is completely free of cost.",
    },
    {
      heading: "CAN WE BRING PREVIOUSLY BUILD PROJECTS?",
      dots: "...................................................................................................................",
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        {faqArray.map(({ heading, dots, para }, i) => (
          <FAQ heading={heading} dots={dots} para={para} />
        ))}
      </div>
    </div>
  );
};

export default Faq1;
