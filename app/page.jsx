import NavBar from "@/components/NavBar";
import React from "react";
import "./globals.css";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div className="bg-[#1A1A1A]  h-screen flex flex-col items-center ">
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
