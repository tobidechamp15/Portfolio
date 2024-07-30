import Image from "next/image";
import React from "react";
import gmailIcon from "../public/assets/gmailIcon.svg";
import linkedinIcon from "../public/assets/linkedinIcon.svg";
import instaIcon from "../public/assets/instaIcon.svg";
import twitIcon from "../public/assets/twitIcon.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-[40px] items-center  xsm:px-[25px] w-full ">
        <div className="flex w-full items-center justify-around">
          <span className="foot-des md:max-w-[630px]">
            Let's Work Together -
          </span>
          <a
            href=""
            className="gmail flex gap-2 items-center border border-gray-300 p-2 rounded-xl"
          >
            <Image src={gmailIcon} />
            tobidechamp15@gmail.com
          </a>
        </div>
      </div>
      <hr className="w-full border-[#484E53] my-7" />
      <div className=" flex justify-around w-full my-[36px]">
        <span className="reserved">@2024 all rights reserved.</span>
        <div className="flex gap-3 items-center">
          <Image src={linkedinIcon} />
          <Image src={instaIcon} />
          <Image src={twitIcon} />
        </div>
      </div>
    </>
  );
};

export default Footer;
