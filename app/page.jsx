import NavBar from "@/components/NavBar";
import React from "react";
import "./globals.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

const Home = () => {
  return (
    <div className="bg-[#1A1A1A]   flex flex-col items-center ">
      <NavBar />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Home;
