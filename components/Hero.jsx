"use client";

import React, { useRef } from "react";
import Image from "next/image";
import avatar from "../public/assets/profile.jpg";
import { profile } from "@/data/portfolio";
import { gsap, EASE, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";

const headline = "Full-stack and mobile engineer for banking and fintech products";

const Hero = () => {
  const root = useRef(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASE } });
      tl.from(".hero-label", { opacity: 0, y: 10, duration: 0.5 })
        // each word rises out of its own mask
        .from(".hero-word", { yPercent: 110, duration: 0.9, stagger: 0.05, ease: "power4.out" }, "-=0.25")
        .from(".hero-lead", { opacity: 0, y: 14, duration: 0.6 }, "-=0.5")
        .from(".hero-cta > *", { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 }, "-=0.4")
        .from(".hero-photo", { opacity: 0, y: 24, scale: 0.98, duration: 0.9 }, 0.15)
        .from(".hero-photo img", { scale: 1.08, duration: 1.4, ease: "power2.out" }, 0.15);

      // The photo drifts a little slower than the page as it scrolls away.
      gsap.to(".hero-photo", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={root} className="pt-16">
      <div className="container-x grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center min-h-[calc(100vh-64px)] py-16 md:py-24">
        <div>
          <p className="hero-label label">{profile.location}</p>

          <h1 className="mt-6 text-[40px] sm:text-5xl lg:text-[64px] leading-[1.06] font-medium tracking-[-0.03em] text-ink-text">
            <span className="sr-only">{headline}</span>
            <span aria-hidden="true">
              {headline.split(" ").map((word, i) => (
                <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
                  <span className="hero-word inline-block">{word}&nbsp;</span>
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-lead mt-6 lead max-w-[36rem] !text-lg !leading-[30px]">{profile.intro}</p>

          <div className="hero-cta mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href={profile.cv} download className="btn btn-secondary">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-photo w-full max-w-[420px] md:max-w-none mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-ink-card">
            <Image
              src={avatar}
              alt="Oluwatobiloba Oluwadare"
              priority
              sizes="(min-width: 768px) 440px, 420px"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
