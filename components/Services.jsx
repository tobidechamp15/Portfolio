"use client";

import React from "react";
import Reveal from "./Reveal";
import { services } from "@/data/portfolio";

// One icon set: 18px, 1.5 stroke, in the muted text colour.
const icons = [
  <path key="web" d="M3 5h18v12H3zM8 21h8M12 17v4" />,
  <path key="mobile" d="M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM11 18h2" />,
  <path key="api" d="M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14" />,
  <path key="design" d="m4 20 4-1 11-11a2.1 2.1 0 0 0-3-3L5 16l-1 4ZM14 6l3 3" />,
];

const Services = () => {
  return (
    <section id="services" className="section border-t border-white/[0.08]">
      <div className="container-x">
        <Reveal>
          <p className="label">Services</p>
          <h2 className="section-title mt-3 max-w-[560px]">What I can build for your team</h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04}>
              <div className="card card-hover p-6 h-full">
                <div className="w-9 h-9 rounded-lg bg-ink-raised border border-white/[0.08] flex items-center justify-center text-ink-muted">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[i % icons.length]}
                  </svg>
                </div>
                <h3 className="mt-5 text-base font-medium text-ink-text">{service.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-text2">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
