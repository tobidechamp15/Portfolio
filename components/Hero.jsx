import React from "react";
import Image from "next/image";
import avatar from "../public/assets/avatar.svg";

const Hero = () => {
  return (
    <div className="container h-screen items-center justify-center flex flex-col bg-hero-bg bg-no-repeat bg-cover bg-center ">
      <Image src={avatar} />
      <span className="hero-name text-center">Oluwadare Oluwatobiloba</span>
      <span className="job-title">Software Engineer</span>
      <span className="job-des text-center">
        As a dedicated software engineer with expertise in developing robust
        applications, optimizing systems, and driving innovation through
        cutting-edge technologies, I excel in tackling complex technical
        challenges and delivering impactful solutions that enhance user
        experiences and streamline operations.
      </span>
      <span className="font-[Montserrat] my-3 border text-white hover:text-black cursor-pointer border-[#4FC3F7] py-[18px] px-[50px] rounded-[75px] transition duration-300 ease-in-out transform hover:bg-[#4FC3F7] hover:scale-105">
        Contact Me
      </span>
    </div>
  );
};

export default Hero;
