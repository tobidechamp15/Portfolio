"use client";

import React from "react";
import { profile, links } from "@/data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.08] bg-ink-deep">
      <div className="container-x py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink-muted">
          © {year} {profile.name}
        </p>
        <div className="flex items-center gap-6 text-sm text-ink-text2">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink-text transition-colors duration-150">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink-text transition-colors duration-150">
            LinkedIn
          </a>
          <a href={links.x} target="_blank" rel="noopener noreferrer" className="hover:text-ink-text transition-colors duration-150">
            X
          </a>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ink-text transition-colors duration-150">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
