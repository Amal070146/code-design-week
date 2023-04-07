import React from "react";
import '../contact/contacts.css'

const CopyRight = () => {
  return (
    <div className="copy-right-wrapper">
      <div className="line-contact"></div>
      <div className="copy-right-contact">
        <div>
          <p>Copyright © 2023 Community Of Developers. All Rights Reserved.</p>
        </div>
        <div className="copy-right-contact-right">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
