"use client";

import React, { useState } from "react";
import "../app/globals.css"; // Correct path to your global CSS
import SideBar from "./SideBar";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex justify-between xsm:px-[30px] md:justify-evenly items-center py-[30px]">
      {isActive && <SideBar />}
      <span className="logoStyle">Tobiloba</span>
      <section className="md:flex hidden nav-items">
        <span>Home</span>
        <span>About</span>
        <span>Project</span>
        <span>Services</span>
        <span>Resume</span>
      </section>
      <section className="contact-item hidden md:flex ">Contact Me</section>
      <div
        className={`hamburgerMenu flex md:hidden ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBar;
