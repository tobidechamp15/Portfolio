import React from "react";
import Image from "next/image";
import webDevIcon from "../public/assets/web-dev-icon.png";
import cloudIcon from "../public/assets/cloudIcon.png";
import databaseIcon from "../public/assets/databaseIcon.png";
import optIcon from "../public/assets/optIcon.png";
import supportIcon from "../public/assets/supportIcon.png";

const Services = () => {
  return (
    <div className="flex flex-col gap-[40px] items-center mb-[40px] xsm:px-[25px]">
      <div className="flex flex-col items-center justify-center">
        <span className="sub-head ">What I do</span>
        <span className="sub-des ">My Services</span>
      </div>
      <section className="flex flex-wrap justify-center gap-4 max-w-[929px]">
        <div className="service-card gap-3 py-[29px] px-[26px] flex flex-col text-white max-w-[289px]">
          <Image src={webDevIcon} width={44} height={44} />
          <span className="service-name"> Custom Software Development</span>
          <span className="service-desc">
            Creating bespoke software solutions tailored to meet specific
            business needs
          </span>
        </div>
        <div className="service-card gap-3 py-[29px] px-[26px] flex flex-col text-white max-w-[289px]">
          <Image src={cloudIcon} width={44} height={44} />
          <span className="service-name"> Cloud Computing Solutions</span>
          <span className="service-desc">
            Implementing cloud-based solutions for scalable and secure data
            storage and processing.
          </span>
        </div>
        <div className="service-card gap-3 py-[29px] px-[26px] flex flex-col text-white max-w-[289px]">
          <Image src={databaseIcon} width={44} height={44} />
          <span className="service-name"> Database Design and Management</span>
          <span className="service-desc">
            Designing and managing relational and non-relational databases for
            efficient data storage and retrieval.
          </span>
        </div>
        <div className="service-card gap-3 py-[29px] px-[26px] flex flex-col text-white max-w-[289px]">
          <Image src={optIcon} width={44} height={44} />
          <span className="service-name">Performance Optimization</span>
          <span className="service-desc">
            Analyzing and optimizing software performance to improve speed,
            scalability, and efficiency.
          </span>
        </div>
        <div className="service-card gap-3 py-[29px] px-[26px] flex flex-col text-white max-w-[289px]">
          <Image src={supportIcon} width={44} height={44} />
          <span className="service-name">Software Maintenance and Support</span>
          <span className="service-desc">
            Providing ongoing maintenance and support for existing software
            applications to ensure they run smoothly.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Services;
