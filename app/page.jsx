import NavBar from "@/components/NavBar";
import React from "react";
import "./globals.css";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Home = () => {
  return (
    <div className="bg-[#1A1A1A]   flex flex-col items-center ">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
