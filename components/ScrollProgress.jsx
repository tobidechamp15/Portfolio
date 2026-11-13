"use client";

import React, { useRef } from "react";
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";

// A thin accent line along the top edge that fills as the page scrolls.
const ScrollProgress = () => {
  const bar = useRef(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60] scale-x-0"
    />
  );
};

export default ScrollProgress;
