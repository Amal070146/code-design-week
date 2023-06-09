import { useState } from "react";
import "./faq.css";
import arrow from "../../assets/designathon/white-down-arrow-faq.png";
import arrowblack from "../../assets/designathon/uparrow-black-faq.png";
import faqb from "../../assets/designathon/faqb.png";
import faqw from "../../assets/designathon/faqw.png";
const FAQ = ({ heading, dots, para }) => {
  const [openpopup, setopenpopup] = useState(false);
  function openPopup() {
    setopenpopup(!openpopup);
  }
  return (
    <div>
      <img src="" alt="" />
      <div
        className="faq-container"
        style={{
          background: openpopup ? "#ffffff" : "#171717",
          color: openpopup ? "#171717" : "#ffffff",
        }}
      >
        <div className="faq-text">
          <h3>{heading}</h3>
          <p>{dots}</p>
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
          <p>{para}</p>
          <a onClick={openPopup}>
            <img src={arrowblack} alt="" />
          </a>
        </div>
      )}
    </div>
  );
};

export default FAQ;
