import React from "react";
import "../app/globals.css";

const SideBar = () => {
  return (
    <div className="flex flex-col text-white fixed h-screen w-full gap-4 bg-[#1A1A1A] pt-[30px] px-3 top-0 left-0 md:hidden ">
      <section className="flex flex-col md:hidden nav-items">
        <span>Home</span>
        <span>About</span>
        <span>Project</span>
        <span>Services</span>
        <span>Resume</span>
      </section>
      <section className="contact-item md:hidden flex">Contact Me</section>
    </div>
  );
};

export default SideBar;
