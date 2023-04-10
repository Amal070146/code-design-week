import React, { useState } from "react";
import logo from "../../assets/cdw-logo.svg";
import "./nav.css";
import menu from "../../assets/menu-logo.png";
import closebutton from "../../assets/closebutton.png";

const Nav = () => {
  const [openmenu, setopenmenu] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  function closeMenu() {
    setopenmenu(false);
  }
  return (
    <>
      <div className="nav-bar-wrapper navbar">
        <div className="header-nav-img">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="nav-links">
          <a href="/#about">ABOUT US</a>
          <a href="/events">EVENTS</a>
          <a href="/schedule">SCHEDULE</a>
          <a href="/#sponsors">SPONSORS</a>
          <a href="/#contacts">CONTACT</a>
        </div>
        <div className="nav-menu-short">
          <button onClick={openMenu}>
            <img src={menu} alt="" />
          </button>
        </div>
        {openmenu && (
          <div className="menu-div">
            <div>
              <button onClick={closeMenu}>
                <img src={closebutton} alt="" />
              </button>
            </div>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="nav-links-menu">
              <a href="/#about">ABOUT US</a>
              <a href="/events">EVENTS</a>
              <a href="/schedule">SCHEDULE</a>
              <a href="/#sponsors">SPONSORS</a>
              <a href="/#contacts">CONTACT</a>
            </div>
            <div>
              <p>Copyright © 2023 Community Of Developers.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
