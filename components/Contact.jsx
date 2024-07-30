import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-[40px] items-center mb-[190px] xsm:px-[25px] w-full ">
      <div className="flex flex-col items-center justify-center">
        <span className="sub-head ">Get in Touch</span>
        <span className="sub-des ">Let us work together</span>
      </div>

      <form className="max-w-[690px] w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white font-semibold">
            Name
          </label>
          <input
            type="text"
            required
            id="name"
            className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300 ease-in-out shadow-sm placeholder-gray-400"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white font-semibold">
            Email
          </label>
          <input
            type="email"
            required
            id="email"
            className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300 ease-in-out shadow-sm placeholder-gray-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white font-semibold">
            Message
          </label>
          <textarea
            id="email"
            required
            className="h-[222px] p-3 bg-transparent rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300 ease-in-out shadow-sm placeholder-gray-400"
            placeholder="Enter your message"
          />
        </div>
        <button className="relative w-fit self-center inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-300 transition duration-300 ease-out border-2 border-blue-300 rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-300 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-blue-300 transition-all duration-300 transform group-hover:translate-x-full ease">
            Get in Touch
          </span>
          <span className="relative invisible">Get in Touch</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
