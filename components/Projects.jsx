import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col gap-[40px] items-center mb-[190px] xsm:px-[25px]">
      <div className="flex flex-col items-center justify-center">
        <span className="sub-head ">Projects</span>
        <span className="sub-des ">Some of my Work</span>
      </div>
      <div className="skills flex gap-[55px] flex-wrap max-w-[1000px] items-center justify-center">
        <span className="">React</span>
        <span className="">Firebase</span>
        <span className="">JavaScript</span>
        <span className="">JQuery</span>
        <span className="">Axios</span>
        <span className="">Framer Motion</span>
      </div>
      <span>Projects</span>
    </div>
  );
};

export default Projects;
