"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";
import { gsap, ScrollTrigger, EASE, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";

import runRide from "../public/assets/RunRideLand.png";
import taskify from "../public/assets/taskifyImg.jpg";
import invoiceXpress from "../public/assets/invoicexpressImg.png";
import thrift4all from "../public/assets/thrift4allmg.png";
import trendMart from "../public/assets/trendMart.svg";
import turnUpLagos from "../public/assets/turnuplagos.png";
import esms from "../public/assets/esms.jpeg";
import thelegalspace from "../public/assets/thelegalspace.jpg";

const images = { thelegalspace, runRide, taskify, invoiceXpress, thrift4all, trendMart, turnUpLagos, esms };

const filters = ["All", "Mobile", "Full-stack", "Web"];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

// Only projects with a real screenshot get a cover. The others stay text, no placeholder art.
const Cover = ({ project }) => (
  <div className="h-48 overflow-hidden border-b border-white/[0.08] bg-ink-raised">
    <Image
      src={images[project.image]}
      alt={`${project.name} screenshot`}
      className="w-full h-full object-cover object-top"
    />
  </div>
);

const ProjectCard = ({ project }) => {
  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="project-card h-full">
      <Wrapper {...wrapperProps} className="card card-hover flex flex-col h-full overflow-hidden">
        {project.image && <Cover project={project} />}
        <div className="p-6 flex flex-col flex-1">
          <p className="label mb-2">{project.category}</p>
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-medium text-ink-text">{project.name}</h3>
            {project.href && (
              <span className="flex items-center gap-1 mono text-xs text-ink-muted">
                Live <ArrowIcon />
              </span>
            )}
          </div>
          <p className="mt-2 text-[15px] leading-6 text-ink-text2 flex-1">{project.summary}</p>
          <p className="mt-4 mono text-xs leading-5 text-ink-muted">{project.tech.join(" · ")}</p>
        </div>
      </Wrapper>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    // featured work first, then the rest in the order they are listed
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [filter]);

  const grid = useRef(null);

  // Cards rise in a short stagger as they enter, and again whenever the filter changes.
  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      gsap.set(cards, { opacity: 0, y: 14 });
      ScrollTrigger.batch(cards, {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.5, ease: EASE, stagger: 0.06, overwrite: true }),
      });
    }, grid);
    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="projects" className="section border-t border-white/[0.08]">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label">Projects</p>
            <h2 className="section-title mt-3 max-w-[560px]">
              Mobile apps, full-stack products and web builds
            </h2>
          </div>
          <div className="flex gap-1 p-1 rounded-[10px] bg-ink-card border border-white/[0.08]" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`h-8 px-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  filter === f
                    ? "bg-ink-raised text-ink-text shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-ink-muted hover:text-ink-text"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div ref={grid} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <Reveal className="mt-10">
          <a
            href="https://github.com/tobidechamp15"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            More on GitHub
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
