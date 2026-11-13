"use client";

import React, { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mark the link of the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-150 ${
        scrolled || open ? "bg-ink-bg border-white/[0.08]" : "bg-transparent border-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16">
        <a
          href="#top"
          className="text-[17px] font-semibold text-ink-text"
          onClick={() => setOpen(false)}
        >
          {profile.shortName}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors duration-150 ${
                  active === item.id ? "text-ink-text" : "text-ink-muted hover:text-ink-text"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-secondary btn-sm hidden md:inline-flex">
          Contact
        </a>

        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/[0.08] bg-ink-raised"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-ink-bg">
          <ul className="container-x flex flex-col pt-4">
            {[...navItems, { id: "contact", label: "Contact" }].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-xl font-medium text-ink-text border-b border-white/[0.08]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
