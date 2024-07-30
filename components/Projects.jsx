import React from "react";
import Image from "next/image";
import runRideImg from "../public/assets/RunRideLand.png";
import taskify from "../public/assets/taskifyImg.jpg";
import invoiceXpress from "../public/assets/invoicexpressImg.png";
import thrift4all from "../public/assets/thrift4allmg.png";
import send from "../public/assets/send.svg";

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
        <span className="">Next.js</span>
        <span className="">Framer Motion</span>
      </div>
      <div className="flex mt-[50px] gap-3 flex-wrap max-w-[1200px] justify-center">
        <a
          href="https://run-ride.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer group relative flex flex-col gap-6 bg-black p-3 rounded-xl transform transition duration-300 hover:scale-105 hover:bg-gray-800"
        >
          <div className="img-container overflow-hidden rounded-lg">
            <Image
              src={runRideImg}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
              alt="Run-Ride project screenshot"
            />
          </div>
          <div className="flex justify-between items-center">
            <section className="flex flex-col gap-2">
              <span className="project-name text-white text-lg font-semibold transition duration-300 group-hover:text-[#4FC3F7]">
                Run-Ride
              </span>
              <span className="project-tech text-gray-400 text-sm">
                React | Firebase | GitHub
              </span>
            </section>
            <Image
              src={send}
              className="w-6 h-6 transition duration-300 transform group-hover:rotate-45 group-hover:text-[#4FC3F7]"
              alt="Send icon"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4FC3F7] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-xl"></div>
        </a>
        <a
          href="https://taskify.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer group relative flex flex-col gap-6 bg-black p-3 rounded-xl transform transition duration-300 hover:scale-105 hover:bg-gray-800"
        >
          <div className="img-container overflow-hidden rounded-lg">
            <Image
              src={taskify}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
              alt="Run-Ride project screenshot"
            />
          </div>
          <div className="flex justify-between items-center">
            <section className="flex flex-col gap-2">
              <span className="project-name text-white text-lg font-semibold transition duration-300 group-hover:text-[#4FC3F7]">
                Taskify
              </span>
              <span className="project-tech text-gray-400 text-sm">
                React | Firebase | GitHub
              </span>
            </section>
            <Image
              src={send}
              className="w-6 h-6 transition duration-300 transform group-hover:rotate-45 group-hover:text-[#4FC3F7]"
              alt="Send icon"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4FC3F7] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-xl"></div>
        </a>
        <a
          href="https://invoicexpress.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer group relative flex flex-col gap-6 bg-black p-3 rounded-xl transform transition duration-300 hover:scale-105 hover:bg-gray-800"
        >
          <div className="img-container overflow-hidden rounded-lg">
            <Image
              src={invoiceXpress}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
              alt="Run-Ride project screenshot"
            />
          </div>
          <div className="flex justify-between items-center">
            <section className="flex flex-col gap-2">
              <span className="project-name text-white text-lg font-semibold transition duration-300 group-hover:text-[#4FC3F7]">
                invoiceXpress
              </span>
              <span className="project-tech text-gray-400 text-sm">
                React | Firebase | Bootstrap
              </span>
            </section>
            <Image
              src={send}
              className="w-6 h-6 transition duration-300 transform group-hover:rotate-45 group-hover:text-[#4FC3F7]"
              alt="Send icon"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4FC3F7] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-xl"></div>
        </a>
        <a
          href="https://thrift4all.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer group relative flex flex-col gap-6 bg-black p-3 rounded-xl transform transition duration-300 hover:scale-105 hover:bg-gray-800"
        >
          <div className="img-container overflow-hidden rounded-lg">
            <Image
              src={thrift4all}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
              alt="Run-Ride project screenshot"
            />
          </div>
          <div className="flex justify-between items-center">
            <section className="flex flex-col gap-2">
              <span className="project-name text-white text-lg font-semibold transition duration-300 group-hover:text-[#4FC3F7]">
                Thrift4all
              </span>
              <span className="project-tech text-gray-400 text-sm">
                React | Tailwindcss | GitHub
              </span>
            </section>
            <Image
              src={send}
              className="w-6 h-6 transition duration-300 transform group-hover:rotate-45 group-hover:text-[#4FC3F7]"
              alt="Send icon"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4FC3F7] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-xl"></div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
