import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-[40px] items-center mb-[40px] xsm:px-[25px] mb-[190px]">
      <div className="flex flex-col items-center justify-center">
        <span className="sub-head ">About me</span>
        <span className="sub-des ">Get to know me</span>
      </div>
      <div className="flex flex-col gap-[40px] ">
        <span className="text-center text-white max-w-[840px] font-[Inter] text-[17px] leading-6">
          Hi there! I'm Tobiloba, a software engineer specializing in full-stack
          development, system optimization, application architecture, and
          DevOps. With a passion for building robust and scalable solutions, I'm
          dedicated to helping businesses enhance their digital presence and
          streamline their operations in today's technology-driven world.
        </span>
        <span className="text-center text-white max-w-[840px] font-[Inter] text-[17px] leading-6">
          I bring a blend of technical expertise, hands-on experience, and a
          commitment to clear communication to every project. Whether it's
          designing efficient systems, optimizing performance, or implementing
          scalable solutions, I'm here to help you harness the full potential of
          technology to achieve your goals.
        </span>
        <span className="text-center text-white max-w-[840px] font-[Inter] text-[17px] leading-6">
          Let's work together to transform your ideas into robust and scalable
          software solutions that drive real results. Get in touch, and let's
          start unlocking the power of technology for your business today!
        </span>
      </div>
      <span className="font-[Montserrat] w-fit my-3 border text-white hover:text-black cursor-pointer border-[#4FC3F7] py-[18px] px-[50px] rounded-[75px] transition duration-300 ease-in-out transform hover:bg-[#4FC3F7] hover:scale-105">
        Download CV
      </span>
    </div>
  );
};

export default About;
