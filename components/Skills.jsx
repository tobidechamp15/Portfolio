"use client";

import React from "react";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="section border-t border-white/[0.08]">
      <div className="container-x">
        <Reveal>
          <p className="label">Skills</p>
          <h2 className="section-title mt-3 max-w-[560px]">
            The stack I use from first commit to store release
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04} className={group.featured ? "md:col-span-2" : ""}>
              <div className="card p-6 h-full">
                <h3 className={group.featured ? "text-xl font-medium text-ink-text" : "text-base font-medium text-ink-text"}>
                  {group.title}
                </h3>
                {group.description && (
                  <p className="mt-2 max-w-[44rem] text-[15px] leading-6 text-ink-text2">{group.description}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
