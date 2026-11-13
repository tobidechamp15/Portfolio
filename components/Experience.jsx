"use client";

import React, { useRef } from "react";
import Reveal from "./Reveal";
import { experience } from "@/data/portfolio";
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";

const Experience = () => {
  const list = useRef(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      // the timeline line draws itself as you scroll through the list
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: list.current, start: "top 70%", end: "bottom 70%", scrub: 0.4 },
        }
      );
      // each dot pops in when its card arrives
      gsap.utils.toArray(".timeline-dot").forEach((dot) => {
        gsap.from(dot, {
          scale: 0,
          duration: 0.4,
          ease: "back.out(2)",
          scrollTrigger: { trigger: dot, start: "top 85%", once: true },
        });
      });
    }, list);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section border-t border-white/[0.08]">
      <div className="container-x">
        <Reveal>
          <p className="label">Experience</p>
          <h2 className="section-title mt-3 max-w-[640px]">
            Banking apps, mentoring and products I built myself
          </h2>
        </Reveal>

        <div ref={list} className="timeline mt-12 space-y-4 max-w-[880px]">
          <span className="timeline-line" aria-hidden="true" />
          {experience.map((job) => (
            <Reveal key={`${job.company}-${job.period}`} className="relative">
              <span className={`timeline-dot ${job.current ? "is-current" : ""}`} aria-hidden="true" />
              <div className="card card-hover p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium text-ink-text">{job.role}</h3>
                  <span className="mono text-xs text-ink-muted">{job.period}</span>
                </div>
                <div className="mt-1 text-sm text-ink-text2">{job.company}</div>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-6 text-ink-text2">
                      <span className="mt-[10px] w-1 h-1 shrink-0 rounded-full bg-ink-muted" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
