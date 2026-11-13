"use client";

import React from "react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { about, stats, profile } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="section border-t border-white/[0.08]">
      <div className="container-x">
        <Reveal>
          <p className="label">About</p>
          <h2 className="section-title mt-3 max-w-[640px]">
            Three years on banking apps and product teams, now also teaching
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <Reveal className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-3">
              <a href={profile.cv} download className="btn btn-primary">
                Download CV
              </a>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card px-6 py-2">
              {about.highlights.map((item, i) => (
                <div key={item.title} className="py-4 border-t border-white/[0.08] first:border-t-0">
                  {i === 0 ? (
                    <h3 className="text-xl font-medium leading-7 text-ink-text">{item.title}</h3>
                  ) : (
                    <div className="label">{item.title}</div>
                  )}
                  <p className="mt-1 text-[15px] leading-6 text-ink-text2">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="card px-6 py-2">
            {stats.map((s) => (
              <div key={s.label} className="ledger-row">
                <span className="text-[15px] text-ink-text2">{s.label}</span>
                <span className="ledger-leader" aria-hidden="true" />
                <CountUp value={s.value} className="mono text-xl font-medium text-ink-text" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
