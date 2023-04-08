import React, { useState } from "react";
import logo from "../../assets/cdw-logo.svg";
import "./nav.css";
import menu from "../../assets/menu-logo.png";

const Nav = () => {
  const [openmenu, setopenmenu] = useState(false);
  function openMenu() {
    setopenmenu(true);
  }
  function closeMenu() {
    setopenmenu(false);
  }
  return (
    <>
      <div className="nav-bar-wrapper navbar">
        <div className="header-nav-img">
          <a href="#header">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="nav-links">
          <a href="#about">ABOUT US</a>
          <a href="#events">EVENTS</a>
          <a href="#team">OUR TEAM</a>
          <a href="#sponsors">SPONSORS</a>
          <a href="#contacts">CONTACT</a>
        </div>
        <div className="nav-menu-short">
          <button onClick={openMenu}>
            <img src={menu} alt="" />
          </button>
        </div>
        {openmenu && (
          <div className="menu-div">
            <div className="nav-links-menu">
              <a href="#about">ABOUT US</a>
              <a href="#events">EVENTS</a>
              <a href="#team">OUR TEAM</a>
              <a href="#sponsors">SPONSORS</a>
              <a href="#contacts">CONTACT</a>
            </div>
            <button onClick={closeMenu}>X</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
