"use client";

import React, { useRef } from "react";
import { gsap, EASE, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";

// Fades and lifts its children into view once, when they scroll into the viewport.
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: EASE,
          scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
