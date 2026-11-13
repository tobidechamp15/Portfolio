"use client";

import React, { useRef } from "react";
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";

// Counts a leading number up once when it scrolls into view ("3+", "30%", "<5 days").
// Values that are not plain figures, like "May 2026", are shown as they are.
const pattern = /^(<?)(\d+)(\+|%| days)?$/;

const CountUp = ({ value, className = "" }) => {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    const match = pattern.exec(value);
    if (!match || prefersReducedMotion()) return;
    const [, prefix, digits, suffix = ""] = match;
    // "<5 days" passing through "<0 days" would read wrong, so upper-bound figures stay static.
    if (prefix) return;
    const target = Number(digits);
    const counter = { n: 0 };
    const el = ref.current;
    el.textContent = `${prefix}0${suffix}`;

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: target,
        duration: 1.2,
        ease: "power2.out",
        snap: { n: 1 },
        onUpdate: () => {
          el.textContent = `${prefix}${counter.n}${suffix}`;
        },
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    }, ref);
    return () => {
      ctx.revert();
      el.textContent = value;
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
};

export default CountUp;
